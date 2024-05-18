const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const menuSchema = Schema(
    {
        menuParentId: {
            type: mongoose.Types.ObjectId,
            ref: 'Menu',
            default: null
        },
        name: {
            type: String,
            required: [true, 'Nama Menu harus diisi'],
        },
        path: {
            type: String,
            required: [true, 'Path Menu harus diisi'],
        },
        icon: {
            type: String,
            required: [true, 'Ikon Menu harus diisi'],
        },
        active: {
            type: Boolean,
            default: true
        },
    },
    { timestamps: true }
);

module.exports = model('Menu', menuSchema);