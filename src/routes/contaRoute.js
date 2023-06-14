'use strict'
const express = require("express");
const router = express.Router();
let contas = require("../contasdb")
const contaService = require('../services/contaService');

// router.get("", (request, response) => {
//   const contas = contaService.listarTodasAsContas()
//   response.json(contas)
// });

router.get("" , async (request, response) => {
  const contas =  await contaService.listarTodasAsContas();
  response.json(contas);
});


router.get("/:id", async (request, response) => {
  const contaPesquisada = await contaService.buscarPorId(request.params.id);
  return response.json(contaPesquisada); // *readme 3
});

router.post("",  async (request, response) => {
  const contaIncluida =  await contaService.incluiConta(request.body);
  return response.json(contaIncluida);
});
// CODIGO ALTERNATIVO INICIO
// return response.json(await contaService.incluiConta(request.body));
// router.post("", contaService.incluiConta);
// CÓDIGO ALTERNATIVO FIM

//  router.put("/:id", contaService.editaConta);
router.put("/:id",  async (request, response) => {
const editarConta = await contaService.editaConta(request.params.id);
return response.json(editarConta);
});

module.exports = router;