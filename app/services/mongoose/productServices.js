const ProductModel = require('../../api/v1/master-data/product/productModel')
const { NotFoundError } = require("../../errors")

const getAllProduct = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { productName: { $regex: new RegExp(search, "i") } };
        }
        const allProduct = await ProductModel.find(query);
        return {
            totalData: allProduct.length,
            products: allProduct,
        };
    }

    let query = {};
    if (search) {
        query = { productName: { $regex: new RegExp(search, "i") } };
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
        products: result,
    };
}

const getOneProduct = async (req) => {

    const { id } = req.params;
    const result = await ProductModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Id Produk Tidak ditemukan`)

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

    if (!result) throw new NotFoundError(`Id Produk Tidak ditemukan`);

    return result;
}

const deleteProduct = async (req) => {
    const { id } = req.params;

    const result = await ProductModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Produk Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllProduct,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}