const { getAllUsers, createUsers, getOneUsers, updateUsers, deleteUsers } = require('../../../services/mongoose/usersServices');

const index = async (req, res, next) => {
    try {
        const result = await getAllUsers(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data Pengguna berhasil ditampilkan",
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
        const result = await getOneUsers(req)

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
        const result = await createUsers(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Pengguna Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateUsers(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Pengguna Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteUsers(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Pengguna Berhasil dihapus",
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