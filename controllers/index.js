const express = require('express');

const agendamentoController = require('../controllers/agendamentoController'); 

const router = express.Router();

router.post('/criarAgendamento', agendamentoController.criarAgendamento);

router.get('/buscarAgendamento', agendamentoController.buscarAgendamentoPorData);



module.exports = app => app.use('/app', router);