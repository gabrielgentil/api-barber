const mongoose = require('../config/index');

const ProdutosSchema = new mongoose.Schema({
  produto: {
    type: String,
    require: true
  },
  preco: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

const produto = mongoose.model('Produtos', ProdutosSchema);

module.exports = produto;
