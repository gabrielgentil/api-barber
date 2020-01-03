const mongoose = require('../config/index');

const AgendamentoSchema = new mongoose.Schema({
  nome_paciente: {
    type: String,
    require: true
  },
  data_ag: {
    type: Date,
    require: true
  },
  valor: {
    type: String,
    require: true
  },
  produto: {
    type: String,
    require: true
  },
  profissional: {
    type: String,
    require: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
})

const agenda = mongoose.model('Agendamento', AgendamentoSchema);

module.exports = agenda;
