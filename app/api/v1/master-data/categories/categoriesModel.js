const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let categorySchema = Schema(
  {
    categoryName: {
      type: String,
      minlength: [3, 'Panjang nama kategori minimal 3 karakter'],
      maxLength: [30, 'Panjang nama kategori maksimal 30 karakter'],
      required: [true, 'Nama kategori harus diisi'],
    },
    totalProductInCategory: {
      type: Number,
    },
    filePath: {
      type: String,
    },
    fileName: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = model('Category', categorySchema);