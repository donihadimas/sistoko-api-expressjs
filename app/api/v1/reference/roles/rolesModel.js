const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let rolesSchema = Schema(
  {
    rolesName: {
      type: String,
      required: [true, 'Nama jabatan harus diisi'],
    },
    permissions: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model('Roles', rolesSchema);