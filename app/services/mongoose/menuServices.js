const menuModel = require("../../api/v1/reference/menu/menuModel");
const { NotFoundError } = require("../../errors")

const getAllMenu = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { name: { $regex: new RegExp(search, "i") } };
        }
        const allMenu = await menuModel.find(query);
        return {
            totalData: allMenu.length,
            data: allMenu,
        };
    }

    let query = {};
    if (search) {
        query = { name: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await menuModel.countDocuments(query);

    const result = await menuModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        data: result,
    };
}

const getAllFilteredMenu = async (req) => {
    const { page = 1, pageSize = 10, search } = req.query;

    let matchStage = {};

    if (search) {
        const regex = new RegExp(search, "i");
        matchStage = {
            $or: [
                { name: { $regex: regex } },
                { 'children.name': { $regex: regex } }
            ]
        };
    }

    const totalCountPipeline = [
        {
            $lookup: {
                from: 'menus',
                localField: '_id',
                foreignField: 'menuParentId',
                as: 'children'
            }
        },
        {
            $match: {
                menuParentId: null,
                ...matchStage
            }
        },
        {
            $count: "totalCount"
        }
    ];

    const resultPipeline = [
        {
            $lookup: {
                from: 'menus',
                localField: '_id',
                foreignField: 'menuParentId',
                as: 'children'
            }
        },
        {
            $match: {
                menuParentId: null,
                ...matchStage
            }
        },
        {
            $skip: (page - 1) * pageSize
        },
        {
            $limit: parseInt(pageSize)
        },
        {
            $sort: { createdAt: -1 }
        }
    ];

    const totalCountResult = await menuModel.aggregate(totalCountPipeline);
    const totalCount = totalCountResult.length > 0 ? totalCountResult[0].totalCount : 0;

    const result = await menuModel.aggregate(resultPipeline);

    return {
        totalData: totalCount,
        page: Number(page),
        pageSize: Number(pageSize),
        data: result,
    };
}

const getOneMenu = async (req) => {

    const { id } = req.params;
    const result = await menuModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Id Menu Tidak ditemukan`)

    return result;
}

const createMenu = async (req) => {
    const { menuParentId, name, path, icon, active } = req.body;

    const result = await menuModel.create({ menuParentId, name, path, icon, active })
    return result;
}

const updateMenu = async (req) => {
    const { id } = req.params;
    const { menuParentId, name, path, icon, active } = req.body;

    const result = await menuModel.findOneAndUpdate(
        { _id: id },
        { menuParentId, name, path, icon, active },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Menu Tidak ditemukan`);

    return result;
}

const deleteMenu = async (req) => {
    const { id } = req.params;

    const result = await menuModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Menu Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllMenu,
    getAllFilteredMenu,
    getOneMenu,
    createMenu,
    updateMenu,
    deleteMenu
}