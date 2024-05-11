const { getAllProduct, createProduct, getOneProduct, updateProduct, deleteProduct } = require('../../../../services/mongoose/productServices');

const index = async (req, res, next) => {
    try {
        const result = await getAllProduct(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data Produk berhasil ditampilkan",
            totalData: result.totalData,
            page: result.page,
            pageSize: result.pageSize,
            data: result.products,
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneProduct(req)

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
        const result = await createProduct(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Produk Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateProduct(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Produk Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteProduct(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Produk Berhasil dihapus",
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