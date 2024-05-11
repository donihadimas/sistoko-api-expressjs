const { getAllEmployees, createEmployees, getOneEmployees, updateEmployees, deleteEmployees } = require('../../../../services/mongoose/employeesServices');

const index = async (req, res, next) => {
    try {
        const result = await getAllEmployees(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data karyawan berhasil ditampilkan",
            totalData: result.totalData,
            page: result.page,
            pageSize: result.pageSize,
            data: result.employees,
        })
    } catch (error) {
        next(error)
    }
}

const find = async (req, res, next) => {
    try {
        const result = await getOneEmployees(req)

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
        const result = await createEmployees(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Karyawan Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateEmployees(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Karyawan Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteEmployees(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Karyawan Berhasil dihapus",
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