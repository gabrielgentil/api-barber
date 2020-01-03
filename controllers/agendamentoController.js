const agendamento = require('../models/agendamento');

module.exports = {
  async criarAgendamento(req, res) {
    try {
      const criar = await agendamento.create(req.body);

      return res.json({ criar })
    } catch (err) {
      return res.status(400).json({ error: 'Falha ao criar agendamento'})
    }
  },

  async buscarAgendamentoPorData(req, res) {
     console.log(req)
    // try { 
     

    //   console.log(data_ag)
    //   // const buscar = await agendamento.find( { data_ag: { $eq: new Date(data_ag) }})

    //   // return res.json({ buscar })
    // } catch (err) {
    //   return res.status(400).json({ error: 'Falha ao buscar clientes do dia'})
    // }
  }
}
