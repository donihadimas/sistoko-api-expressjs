const ProductModel = require('../../api/v1/master-data/product/productModel')
const { NotFoundError } = require("../../errors");
const { GeneralMessages } = require('../../utils/const/message');
const { buildQuery } = require('../../utils/query');

const getAllProduct = async (req) => {
    const { page, pageSize, search = '' } = req.query;

    const query = buildQuery(search, ['productName']);

    if (!page || !pageSize) {
        const allProduct = await ProductModel.find(query)
            .sort({ createdAt: -1 });
        return {
            totalData: allProduct.length,
            data: allProduct,
        };
    }

    const totalCount = await ProductModel.countDocuments(query);

    const result = await ProductModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        data: result,
    };
}

const getOneProduct = async (req) => {

    const { id } = req.params;

    const result = await ProductModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(GeneralMessages.IdNotFound)

    return result;
}

const createProduct = async (req) => {
    const { productName, description, brand, variant, unitTypeId, price, stock, image, barcode, discount, categoryId, supplierId } = req.body;

    const result = await ProductModel.create({ productName, description, brand, variant, unitTypeId, price, stock, image, barcode, discount, categoryId, supplierId })

    return result;
}

const updateProduct = async (req) => {
    const { id } = req.params;
    const { productName, description, brand, variant, unitTypeId, price, stock, image, barcode, discount, categoryId, supplierId } = req.body;

    const result = await ProductModel.findOneAndUpdate(
        { _id: id },
        { productName, description, brand, variant, unitTypeId, price, stock, image, barcode, discount, categoryId, supplierId },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(GeneralMessages.IdNotFound)

    return result;
}

const deleteProduct = async (req) => {
    const { id } = req.params;

    const result = await ProductModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(GeneralMessages.IdNotFound)

    return result;
}

module.exports = {
    getAllProduct,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}