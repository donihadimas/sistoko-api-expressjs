RolesModel = require("../../api/v1/reference/roles/rolesModel");
const { BadRequestError, NotFoundError } = require("../../errors")

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
            employees: allRoles,
        };
    }

    let query = {};
    if (search) {
        query = { rolesName: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await RolesModel.countDocuments(query);

    const result = await RolesModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        roles: result,
    };
}

const getOneRoles = async (req) => {

    const { id } = req.params;
    const result = await RolesModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Id Roles Tidak ditemukan`)

    return result;
}

const createRoles = async (req) => {
    const { rolesName, permissions } = req.body;

    const result = await RolesModel.create({ rolesName, permissions })
    return result;
}

const updateRoles = async (req) => {
    const { id } = req.params;
    const { rolesName, permissions } = req.body;

    const result = await RolesModel.findOneAndUpdate(
        { _id: id },
        { rolesName, permissions },
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