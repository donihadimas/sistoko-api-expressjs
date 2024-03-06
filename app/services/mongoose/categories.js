const Categories = require('../../api/v1/master-data/categories/model')
const { BadRequestError, NotFoundError } = require(".././../errors")

const getAllCategories = async () => {
    const result = await Categories.find()

    return result;
}

const getOneCategories = async (req) => {

    const { id } = req.params;
    const result = await Categories.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Tidak Ada Kategori dengan id: ${id}`)

    return result;
}

const createCategories = async (req) => {
    const { categoryName } = req.body;

    const checkCategory = await Categories.findOne({ categoryName });

    if (checkCategory) throw new BadRequestError("Kategori sudah ada");

    const result = await Categories.create({ categoryName })
    return result
}

const updateCategories = async (req) => {
    const { id } = req.params;
    const { categoryName } = req.body;

    const checkCategory = await Categories.findOne({
        _id: id,
        categoryName,
    })
    if (checkCategory) throw new BadRequestError("Kategori sudah ada")


    const result = await Categories.findOneAndUpdate(
        { _id: id },
        { categoryName },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Tidak Ada Kategori dengan id: ${id}`);

    return result;
}

const deleteCategories = async (req) => {
    const { id } = req.params;

    const result = await Categories.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Tidak Ada Kategori dengan id: ${id}`);

    return result;
}

module.exports = {
    getAllCategories,
    getOneCategories,
    createCategories,
    updateCategories,
    deleteCategories
}