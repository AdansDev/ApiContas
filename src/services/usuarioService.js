'use strict'
const bcrypt = require('bcrypt')
const usuarioModel = require('../models/usuarioModel')

module.exports = {
  
  listar: async () => {
    try {
      return  await usuarioModel.find();      
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
      return await usuarioModel.findOne({ _id: id });
    } catch (error) {
      throw {
        message: error.message,
        status: 500,
        success: false,
      }
    }
  },

  inclui: async (dados) => {
    try {
      dados.senha = await bcrypt.hash(dados.senha, 10)
      return await usuarioModel.create(dados)
      } catch (error) {
     return {
        mensagem: error,
        sucess: false,
        status: 404,
      }
    }
  },

  edita:  async (id, novasInformacoes) => {
    try {
     
      const dadosAtualizados = await usuarioModel.findByIdAndUpdate(
        id,
        { ...novasInformacoes },
        { new: true } 
      );
      if (!dadosAtualizados) {
        throw {
          message: 'Não foi possível localizar a conta',
          status: 404,
          success: false,
        }
      }
      return dadosAtualizados; 
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
      const remove = await usuarioModel.findByIdAndRemove(conta)
      if(!remove)
      throw {
        mensagem: 'Erro, Usuário não encontrado!!',
      }
      return remove;
    } catch (error) {
      return {
        mensagem: 'Erro, Usuário não encontrado!!',
        sucess: false,
        status: 404,
      }
    }
  }
  
}