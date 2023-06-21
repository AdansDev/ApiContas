'use strict'
const express = require("express");
const router = express.Router();
const loginService = require('../services/loginService');



router.post("",  async (request, response) => {
    return response.json(await loginService.autenticar(request.body));
});



module.exports = router;