'use strict'
const bcrypt = require('bcrypt')
const usuarioModel = require('../models/usuarioModel')

module.exports = {
  
  autenticar: async (usuario) => {
    try {
      const usuarioEncontrado = await usuarioModel.findOne({ email: usuario.email });
      if
      (!usuarioEncontrado)
      return{
        mensagem: "Credenciais Inválidas",
        status: 404,
        success: false,
      }
      const senhaValida = await bcrypt.compare(usuario.senha, usuarioEncontrado.senha);
        
      if(!senhaValida)
      return {
        mensagem: "Credenciais Inválidas",
        status: 404,
        success: false,
      }

      return{
        id: usuarioEncontrado._id,
        nome: usuarioEncontrado.nome,
        success: true,
      };
    } catch (error) {
      throw {
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
