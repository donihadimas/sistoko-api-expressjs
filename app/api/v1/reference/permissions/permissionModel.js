const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const permissionsSchema = Schema(
    {
        roleId: {
            type: mongoose.Types.ObjectId,
            ref: 'Roles',
            required: [true, 'RoleId harus diisi'],
        },
        menuId: {
            type: mongoose.Types.ObjectId,
            ref: 'Menu',
            required: [true, 'MenuId harus diisi'],
        },
        permissions: {
            type: {
                list: { type: Boolean, default: false },
                create: { type: Boolean, default: false },
                read: { type: Boolean, default: false },
                update: { type: Boolean, default: false },
                delete: { type: Boolean, default: false }
            },
            default: { list: false, create: false, read: false, update: false, delete: false },
            required: [true, 'Permissions harus diisi'],
        }
    },
    { timestamps: true }
);

module.exports = model('Permissions', permissionsSchema);