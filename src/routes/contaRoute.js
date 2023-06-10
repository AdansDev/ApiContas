'use strict'
const express = require("express");
const router = express.Router();
const contaService = require('../services/contaService');

// router.get("", (request, response) => {
//   const contas = contaService.listarTodasAsContas()
//   response.json(contas)
// });

router.get("" , contaService.listarTodasAsContas)


// CODIGO ALTERNATIVO INICIO
router.get("/:id", async (request, response) => {
  const contaPesquisada = await contaService.buscarPorId(request.params.id);
  return response.json(contaPesquisada); // *readme 3
});
// CÓDIGO ALTERNATIVO FIM

router.post("", contaService.incluiConta);
router.put("/:id", contaService.editaConta);

module.exports = router;