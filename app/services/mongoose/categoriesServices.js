const CategoriesModel = require('../../api/v1/master-data/categories/categoriesModel')
const { BadRequestError, NotFoundError } = require("../../errors")

const getAllCategories = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { categoryName: { $regex: new RegExp(search, "i") } };
        }
        const allCategories = await CategoriesModel.find(query);
        return {
            totalData: allCategories.length,
            categories: allCategories,
        };
    }

    let query = {};
    if (search) {
        query = { categoryName: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await CategoriesModel.countDocuments(query);

    const result = await CategoriesModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        categories: result,
    };
}

const getOneCategories = async (req) => {

    const { id } = req.params;
    const result = await CategoriesModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Id Kategori tidak ditemukan`)

    return result;
}

const createCategories = async (req, fileName = null, filePath = null) => {
    const { categoryName, totalProductInCategory } = req.body;

    const checkCategory = await CategoriesModel.findOne({ categoryName });

    if (checkCategory) throw new BadRequestError("Kategori sudah ada");

    const result = await CategoriesModel.create({ categoryName, totalProductInCategory, fileName, filePath })
    return result
}

const updateCategories = async (req) => {
    const { id } = req.params;
    const { categoryName } = req.body;

    const checkCategory = await CategoriesModel.findOne({
        _id: id,
        categoryName,
    })
    if (checkCategory) throw new BadRequestError("Kategori sudah ada")


    const result = await CategoriesModel.findOneAndUpdate(
        { _id: id },
        { categoryName },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Kategori tidak ditemukan`);

    return result;
}

const deleteCategories = async (req) => {
    const { id } = req.params;

    const result = await CategoriesModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Kategori tidak ditemukan`);

    return result;
}

module.exports = {
    getAllCategories,
    getOneCategories,
    createCategories,
    updateCategories,
    deleteCategories
}