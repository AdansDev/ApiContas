'use strict'
const ContaModel = require('../models/contaModels')

module.exports = {
 
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

  editaConta: async (id, novasInformacoes) => {
    try {
      // let contaEncontrada = await ContaModel.findById(id); exemplo de variavel para localizar um iD

      const contaAtualizada = await ContaModel.findByIdAndUpdate(
        id,
        { ...novasInformacoes },
        { new: true }
      );
      if (!contaAtualizada) {
        throw {
          message: 'Não foi possível localizar a conta',
          status: 404,
          success: false,
        }
      }
      return contaAtualizada;
    } catch (error) {
      console.error(error);
      return {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },
  Exclui: async (conta) => {
    try {
      const remove = await ContaModel.findByIdAndRemove(conta)
      if(!remove)
      throw {
        mensagem: 'Erro, conta não encontrada!!',
      }
      return remove;
    } catch (error) {
      return {
        mensagem: 'Erro, conta não encontrada!!',
        sucess: false,
        status: 404,
      }
    }
  },
}