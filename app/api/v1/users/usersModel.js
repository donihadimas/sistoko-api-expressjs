/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { emailRegex, phoneRegex, passwordRegex } = require('../../../utils/regex');
const { model, Schema } = mongoose;


const usersSchema = Schema(
    {
        userName: {
            type: String,
            minlength: [3, 'Panjang username minimal 3 karakter'],
            maxLength: [30, 'Panjang username maksimal 30 karakter'],
            required: [true, 'Username harus diisi'],
        },
        fullName: {
            type: String,
            required: [true, 'Nama Karyawan harus diisi'],
        },
        email: {
            type: String,
            required: [true, 'Email harus diisi'],
            match: [emailRegex, 'Email tidak valid'],
        },
        phoneNumber: {
            type: String,
            minlength: [12, 'Panjang nomor telepon minimal 12 karakter'],
            maxLength: [13, 'Panjang nomor telepon maksimal 13 karakter'],
            required: [true, 'Nomor Telepon harus diisi'],
            match: [phoneRegex, 'Nomor Telepon tidak valid (Minimal 12 - 13 Karakter)'],
        },
        password: {
            type: String,
            required: [true, 'Password harus diisi'],
            minlength: [6, 'Password minimal 6 karakter'],
            match: [passwordRegex, "Password harus terdiri dari huruf kecil, huruf kapital, angka, dan simbol"],
        },
        address: {
            type: String,
            default: null
        },
        roleId: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Roles',
                default: null
            }
        ],
    },
    { timestamps: true }
);

usersSchema.pre('save', async function (next) {
    const user = this; // Gunakan user bukan User, karena this merujuk ke instance user
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 12);
    }
    next();
});
usersSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
};


module.exports = model('Users', usersSchema);