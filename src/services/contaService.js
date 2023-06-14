'use strict'
let contas = require("../contasdb");
const ContaModel = require('../models/contaModels')

module.exports = {
  // listarTodasAsContas: () => {
  //   return contas;
  // },

  listarTodasAsContas: async () => {
    try {
      const contasCadastradas = await ContaModel.find();
      return contasCadastradas;
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },

  buscarPorId: async (id) => {
    try {
      return await ContaModel.findOne({ _id: id });
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },

  incluiConta: async (conta) => {
    try {
      const novaConta = await ContaModel.create(conta)
      return novaConta;
    } catch (error) {
     return {
        mensagem: error,
        sucess: false,
        status: 404,
      }
    }
  },

  editaConta:  async (id, novasInformacoes) => {
    try {
      let contaEncontrada = await ContaModel.findById(id);

      if (!contaEncontrada) {
        throw {
          message: 'Não foi possível localizar a conta',
          status: 404,
          success: false,
        }
      }

      const contaAtualizada = await ContaModel.findByIdAndUpdate(
        id,
        { ...novasInformacoes },
        { new: true }
      );

      return contaAtualizada; 
    } catch (error) {
      console.error(error);
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },
}