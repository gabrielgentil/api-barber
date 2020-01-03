const mongoose = require('../config/index');

const ClientesSchema = new mongoose.Schema({
  nome_paciente: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  numero_contato: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

const cliente = mongoose.model('Clientes', ClientesSchema);

module.exports = cliente;
