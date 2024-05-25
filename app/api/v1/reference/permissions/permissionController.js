const { getAllPermissions, createPermissions, getOnePermissions, updatePermissions, deletePermissions } = require('../../../../services/mongoose/permissionServices');

const index = async (req, res, next) => {
    try {
        const result = await getAllPermissions(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data Hak Akses berhasil ditampilkan",
            totalData: result.totalData,
            page: result.page,
            pageSize: result.pageSize,
            data: result.data,
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOnePermissions(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try {
        const result = await createPermissions(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Hak Akses Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updatePermissions(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Hak Akses Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deletePermissions(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Hak Akses Berhasil dihapus",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    index,
    find,
    create,
    update,
    destroy
}