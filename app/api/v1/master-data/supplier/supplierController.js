const { getAllSupplier, createSupplier, getOneSupplier, updateSupplier, deleteSupplier } = require('../../../../services/mongoose/supplierServices');

const index = async (req, res, next) => {
    try {
        const result = await getAllSupplier(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data Supplier berhasil ditampilkan",
            totalData: result?.totalData,
            page: result?.page,
            pageSize: result?.pageSize,
            data: result?.supplier,
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneSupplier(req)

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
        const result = await createSupplier(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Supplier Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateSupplier(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Supplier Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteSupplier(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Supplier Berhasil dihapus",
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