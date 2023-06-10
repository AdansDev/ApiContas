'use strict'
let contas = require("../contasdb");
const contaModels = require("../models/contaModels");
const ContaModel = require('../models/contaModels')

module.exports = {
  // listarTodasAsContas: () => {
  //   return contas;
  // },

  listarTodasAsContas: (request, response) => {
    response.json(contas)
  },

  buscarPorId: async (id) => {
      try {
      const contaEncontrada = await ContaModel.findOne({_id: id});
      return contaEncontrada;
    } catch (error) {
      return { mensagem: error }; // *readme 2
    }
  },
  incluiConta: (request, response) => {
    let novaConta = request.body;
    try {
      return novaConta = await contaModels
    } catch (error) {
      return{
        mensagem: error,
        sucess: false,
        
      }
    }
  },

  editaConta: (request, response) => {
    let contaId = Number(request.params.id);
    let indexContaEncontrada = contas.findIndex((conta) => conta.id === contaId);

    if (indexContaEncontrada === -1) {
      return response.status(404).json({ mensagem: "Conta não encontrada!" });
    }
    let novaConta = request.body;
    contas[indexContaEncontrada] = { ...novaConta };
    response.json({ mensagem: "Conta alterada com sucesso" })
  }
}