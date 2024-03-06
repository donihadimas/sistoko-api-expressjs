const Categories = require('./model')


const index = async (req, res, next) => {
    try {
        const result = await Categories.find();
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

const find = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Categories.findOne({ _id: id })

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
        const { categoryName } = req.body
        const result = await Categories.create({ categoryName })

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
        const { id } = req.params;
        const { categoryName } = req.body;

        const result = await Categories.findOneAndUpdate(
            { _id: id },
            { categoryName },
            { new: true, runValidators: true }
        )

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

const destroy = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const result = await Categories.findOneAndDelete({ _id: id });

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