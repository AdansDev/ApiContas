'use strict'
const express = require("express");
const router = express.Router();
const contaService = require('../services/contaService');

router.get("", async (request, response) => {
  const contas = await contaService.listarTodasAsContas();
  response.json(contas);
});

router.get("/:id", async (request, response) => {
  const contaPesquisada = await contaService.buscarPorId(request.params.id);
  return response.json(contaPesquisada); // *readme 3
});

router.post("", async (request, response) => {
  const contaIncluida = await contaService.incluiConta(request.body);
  return response.json(contaIncluida);
  console.log(contaIncluida);
});

router.put("/:id", async (request, response) => {
  const editarConta = await contaService.editaConta(request.params.id, request.body);
  return response.json(editarConta);
});

router.delete("/:id", async (request, response) => {
  const contaExcluida = await contaService.Exclui(request.params.id);
  return response.json(contaExcluida);
});

module.exports = router;