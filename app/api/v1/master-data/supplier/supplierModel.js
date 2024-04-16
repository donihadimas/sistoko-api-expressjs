const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let supplierSchema = Schema(
    {
        supplierName: {
            type: String,
            required: [true, 'Nama Supplier harus diisi'],
        },
        address: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        notes: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = model('Supplier', supplierSchema);