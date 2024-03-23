const Categories = require('../../api/v1/master-data/categories/model')
const { BadRequestError, NotFoundError } = require(".././../errors")

const getAllCategories = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { categoryName: { $regex: new RegExp(search, "i") } };
        }
        const allCategories = await Categories.find(query);
        return {
            totalData: allCategories.length,
            categories: allCategories,
        };
    }

    let query = {};
    if (search) {
        query = { categoryName: { $regex: new RegExp(search, "i") } };
    }
    
    const totalCount = await Categories.countDocuments(query);

    const result = await Categories.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({createdAt: -1});

    return {
        totalData: totalCount,
        page,
        pageSize,
        categories: result,
    };
}

const getOneCategories = async (req) => {

    const { id } = req.params;
    const result = await Categories.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Tidak Ada Kategori dengan id: ${id}`)

    return result;
}

const createCategories = async (req) => {
    const { categoryName, totalProductInCategory } = req.body;

    const checkCategory = await Categories.findOne({ categoryName });

    if (checkCategory) throw new BadRequestError("Kategori sudah ada");

    const result = await Categories.create({ categoryName, totalProductInCategory })
    return result
}

const updateCategories = async (req) => {
    const { id } = req.params;
    const { categoryName } = req.body;

    const checkCategory = await Categories.findOne({
        _id: id,
        categoryName,
    })
    if (checkCategory) throw new BadRequestError("Kategori sudah ada")


    const result = await Categories.findOneAndUpdate(
        { _id: id },
        { categoryName },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Tidak Ada Kategori dengan id: ${id}`);

    return result;
}

const deleteCategories = async (req) => {
    const { id } = req.params;

    const result = await Categories.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Tidak Ada Kategori dengan id: ${id}`);

    return result;
}

module.exports = {
    getAllCategories,
    getOneCategories,
    createCategories,
    updateCategories,
    deleteCategories
}