'use strict'
const bcrypt = require('bcrypt')
const usuarioModel = require('../models/usuarioModel');
const { gerarToken } = require('../utils/TokenUtil');

module.exports = {

  autenticar: async (usuario) => {
    try {
      const usuarioEncontrado = await usuarioModel.findOne({ email: usuario.email });

      if (!usuarioEncontrado) {
        return {
          message: "Credenciais Inválidas 1",
          status: 401,
          success: false,
        }
      }

      const senhaValida = await bcrypt.compare(usuario.senha, usuarioEncontrado.senha);

      if (!senhaValida) {
        return {
          message: "Credenciais Inválidas 2",
          status: 401,
          success: false,
        };
      }

      const token = gerarToken(JSON.stringify(usuarioEncontrado));

      return {
        message: "Login realizado com sucesso",
        status: 200,
        success: true,
        token,
      };
    } catch (error) {
      return {
        message: error.message,
        status: 404,
        success: false,
      }
    }
  },
}

// module.exports = {
//   autenticar: async (usuario) => {
//     try {
//       const usuarioEncontrado = await usuarioModel.findOne({ email: usuario.email });
//       if (!usuarioEncontrado) {
//         return {
//           mensagem: "Credenciais Inválidas",
//           status: 404,
//           success: false,
//         };
//       }
//       const senhaValida = await bcrypt.compare(usuario.senha, usuarioEncontrado.senha);
//       if (!senhaValida) {
//         return {
//           mensagem: "Credenciais Inválidas",
//           status: 404,
//           success: false,
//         };
//       }

//       // Retorne apenas as informações necessárias para a resposta da autenticação
//       return {
//         id: usuarioEncontrado._id,
//         nome: usuarioEncontrado.nome,
//         // Adicione outros campos relevantes aqui, se necessário
//         success: true,
//       };
//     } catch (error) {
//       throw {
//         mensagem: error.message,
//         status: 404,
//         success: false,
//       };
//     }
//   },
// };
