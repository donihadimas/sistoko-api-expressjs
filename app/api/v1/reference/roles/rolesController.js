const { getAllRoles, createRoles, getOneRoles, updateRoles, deleteRoles } = require('../../../../services/mongoose/rolesServices');

const index = async (req, res, next) => {
    try {
        const result = await getAllRoles(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data jabatan berhasil ditampilkan",
            totalData: result?.totalData,
            page: result?.page,
            pageSize: result?.pageSize,
            data: result?.roles,
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneRoles(req)

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
        const result = await createRoles(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Jabatan Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateRoles(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Jabatan Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteRoles(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Jabatan Berhasil dihapus",
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