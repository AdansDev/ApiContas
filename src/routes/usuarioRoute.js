'use strict'
const express = require("express");
const router = express.Router();
const usuarioService = require('../services/usuarioService');

// router.get("", (request, response) => {
//   const contas = usuarioService.listarTodasAsContas()
//   response.json(contas)
// }); rota de exemplo com variavel, mas pode fazer o comando com return direto, conforme  abaixo

router.get("", async (request, response) => {
 return response.json(await usuarioService.listar());
});

router.get("/:id", async (request, response) => {
  return response.json(await usuarioService.buscarPorId(request.params.id)); // *readme 3
});

router.post("", async (request, response) => {
  return response.json(await usuarioService.inclui(request.body));
});

router.put("/:id", async (request, response) => {
  return response.json(await usuarioService.edita(request.params.id, request.body));
});

router.delete("/:id", async (request, response) => {
  return response.json(await usuarioService.Exclui(request.params.id));
});
module.exports = router;