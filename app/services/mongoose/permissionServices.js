/* eslint-disable no-unused-vars */
const permissionsModel = require("../../api/v1/reference/permissions/permissionModel");
const rolesModel = require("../../api/v1/reference/roles/rolesModel");
const { NotFoundError } = require("../../errors")

const getAllPermissions = async (req) => {
    const { page, pageSize } = req.query;

    const totalData = await permissionsModel.countDocuments();

    const result = await permissionsModel.find()
        .populate("roleId")
        .populate("menuId")
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData,
        page,
        pageSize,
        data: result,
    };
}

const getOnePermissions = async (req) => {

    const { id } = req.params;
    const result = await permissionsModel.findOne({ _id: id })
        .populate("roleId")
        .populate("menuId")

    if (!result) throw new NotFoundError(`Id Permissions Tidak ditemukan`)

    return result;
}

const createPermissions = async (req) => {
    const { roleId, menuId, permissions } = req.body;

    const result = await permissionsModel.create({ roleId, menuId, permissions })

    await rolesModel.findOneAndUpdate(
        { _id: roleId },
        { $push: { permissionsId: result._id } }, // ? add permission in role collection
        { new: true, runValidators: true }
    )
    return result;
}

const updatePermissions = async (req) => {
    const { id } = req.params;
    const { roleId, menuId, permissions } = req.body;

    const result = await permissionsModel.findOneAndUpdate(
        { _id: id },
        { roleId, menuId, permissions },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Permissions Tidak ditemukan`);

    return result;
}

const deletePermissions = async (req) => {
    const { id } = req.params;

    const result = await permissionsModel.findOneAndDelete({ _id: id })

    const deletePermissionInRole = await rolesModel.findOneAndUpdate(
        { _id: result.roleId },
        { $pull: { permissionsId: result._id } }, // ? remove permission in role collection
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Permissions Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllPermissions,
    getOnePermissions,
    createPermissions,
    updatePermissions,
    deletePermissions
}