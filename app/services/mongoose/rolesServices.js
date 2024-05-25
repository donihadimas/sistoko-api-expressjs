const RolesModel = require("../../api/v1/reference/roles/rolesModel");
const { NotFoundError } = require("../../errors")

const getAllRoles = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { rolesName: { $regex: new RegExp(search, "i") } };
        }
        const allRoles = await RolesModel.find(query);
        return {
            totalData: allRoles.length,
            data: allRoles,
        };
    }

    let query = {};
    if (search) {
        query = { rolesName: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await RolesModel.countDocuments(query);

    const result = await RolesModel.find(query)
        .populate("permissionsId")
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

const getOneRoles = async (req) => {

    const { id } = req.params;
    const result = await RolesModel.findOne({ _id: id })
        .populate("permissionsId")

    if (!result) throw new NotFoundError(`Id Roles Tidak ditemukan`)

    return result;
}

const createRoles = async (req) => {
    const { rolesName, permissionsId } = req.body;

    const result = await RolesModel.create({ rolesName, permissionsId })
    return result;
}

const updateRoles = async (req) => {
    const { id } = req.params;
    const { rolesName, permissionsId } = req.body;

    const result = await RolesModel.findOneAndUpdate(
        { _id: id },
        { rolesName, permissionsId },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Roles Tidak ditemukan`);

    return result;
}

const deleteRoles = async (req) => {
    const { id } = req.params;

    const result = await RolesModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Roles Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllRoles,
    getOneRoles,
    createRoles,
    updateRoles,
    deleteRoles
}