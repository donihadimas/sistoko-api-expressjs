const SupplierModel = require('../../api/v1/master-data/supplier/supplierModel');
const { NotFoundError } = require("../../errors");

const getAllSupplier = async (req) => {
    const { page, pageSize, search } = req.query;

    if (!page || !pageSize) {
        let query = {};
        if (search) {
            query = { supplierName: { $regex: new RegExp(search, "i") } };
        }
        const allSupplier = await SupplierModel.find(query);
        return {
            totalData: allSupplier.length,
            supplier: allSupplier,
        };
    }

    let query = {};
    if (search) {
        query = { supplierName: { $regex: new RegExp(search, "i") } };
    }

    const totalCount = await SupplierModel.countDocuments(query);

    const result = await SupplierModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 });

    return {
        totalData: totalCount,
        page,
        pageSize,
        supplier: result,
    };
}

const getOneSupplier = async (req) => {

    const { id } = req.params;
    const result = await SupplierModel.findOne({ _id: id })

    if (!result) throw new NotFoundError(`Id Supplier Tidak ditemukan`)

    return result;
}

const createSupplier = async (req) => {
    const { supplierName, address, phoneNumber, notes } = req.body;

    const result = await SupplierModel.create({ supplierName, address, phoneNumber, notes })
    return result;
}

const updateSupplier = async (req) => {
    const { id } = req.params;
    const { supplierName, address, phoneNumber, notes } = req.body;

    const result = await SupplierModel.findOneAndUpdate(
        { _id: id },
        { supplierName, address, phoneNumber, notes },
        { new: true, runValidators: true }
    )

    if (!result) throw new NotFoundError(`Id Supplier Tidak ditemukan`);

    return result;
}

const deleteSupplier = async (req) => {
    const { id } = req.params;

    const result = await SupplierModel.findOneAndDelete({ _id: id })

    if (!result) throw new NotFoundError(`Id Supplier Tidak ditemukan`);

    return result;
}

module.exports = {
    getAllSupplier,
    getOneSupplier,
    createSupplier,
    updateSupplier,
    deleteSupplier
}