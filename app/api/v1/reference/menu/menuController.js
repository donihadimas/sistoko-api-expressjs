const { getAllMenu, createMenu, getOneMenu, updateMenu, deleteMenu, getAllFilteredMenu } = require('../../../../services/mongoose/menuServices');

const index = async (req, res, next) => {
    try {
        const { filtered = 'false' } = req.query;
        let result
        if (filtered === 'true') {
            result = await getAllFilteredMenu(req);
        } else {
            result = await getAllMenu(req);
        }

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Data menu berhasil ditampilkan",
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
        const result = await getOneMenu(req)

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
        const result = await createMenu(req);

        res.status(201).json({
            success: true,
            error_code: null,
            message: "Menu Berhasil ditambahkan",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const result = await updateMenu(req)

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Menu Berhasil diubah",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const destroy = async (req, res, next) => {
    try {
        const result = await deleteMenu(req);

        res.status(200).json({
            success: true,
            error_code: null,
            message: "Menu Berhasil dihapus",
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