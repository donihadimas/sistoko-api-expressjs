const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let productSchema = Schema(
    {
        productName: {
            type: String,
            required: [true, 'Nama Produk harus diisi'],
        },
        description: {
            type: String,
        },
        brand: {
            type: String,
        },
        variant: {
            type: String,
        },
        unitTypeId: {
            type: String,
            required: [true, 'Unit Type harus diisi'],
        },
        price: {
            type: Number,
            required: [true, 'Harga harus diisi'],
        },
        stock: {
            type: Number,
        },
        image: {
            type: String,
        },
        barcode: {
            type: String,
        },
        discount: {
            type: Number,
        },
        categoryId: {
            type: String,
        },
        supplierId: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = model('Product', productSchema);