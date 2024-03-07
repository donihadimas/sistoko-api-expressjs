const { getAllCategories, createCategories, getOneCategories, updateCategories, deleteCategories } = require('../../../../services/mongoose/categories');

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data kategori berhasil ditampilkan",
            totalData: result?.totalData,
            page: result?.page,
            pageSize: result?.pageSize,
            data: result?.categories,
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneCategories(req)

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
        const result = await createCategories(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Kategori Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateCategories(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Kategori Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteCategories(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Kategori Berhasil dihapus",
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