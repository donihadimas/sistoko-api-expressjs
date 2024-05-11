const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const employeesSchema = Schema(
    {
        employeeUsername: {
            type: String,
            minlength: [3, 'Panjang username minimal 3 karakter'],
            maxLength: [30, 'Panjang username maksimal 30 karakter'],
            required: [true, 'Username harus diisi'],
        },
        employeeFullName: {
            type: String,
            required: [true, 'Nama Karyawan harus diisi'],
        },
        employeePhoneNumber: {
            type: String,
            minlength: [3, 'Panjang nomor telepon minimal 12 karakter'],
            maxLength: [13, 'Panjang nomor telepon maksimal 13 karakter'],
            required: [true, 'Nomor Telepon harus diisi'],
        },
        employeeAddress: {
            type: String,
            required: [true, 'Alamat harus diisi'],
        },
        employeeRole: {
            type: String,
            required: [true, 'Jabatan harus diisi'],
        },
    },
    { timestamps: true }
);

module.exports = model('Employees', employeesSchema);