const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const rolesSchema = Schema(
  {
    rolesName: {
      type: String,
      required: [true, 'Nama jabatan harus diisi'],
    },
    permissionsId: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Permissions",
      }
    ],
  },
  { timestamps: true }
);

module.exports = model('Roles', rolesSchema);