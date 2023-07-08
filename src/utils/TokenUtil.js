'use strict'
const jwt = require('jsonwebtoken');

module.exports = {
  gerarToken: (dadosUsuario) => {
    try {
      return jwt.sign(dadosUsuario, 'secret');
    } catch (error) {
      console.error(error);
      throw {
        message: `Erro ao gerar Token: ${error}`,
        status: 500,
        sucess: false,
      }
    }
  },
  validarToken: (token) => {
    try {
      return jwt.verify(token, 'secret')
    } catch (error) {
      console.error(error);
      throw {
        message: `Erro ao validar Token: ${error}`,
        status: 500,
        sucess: false,
      }
    }
  }
}