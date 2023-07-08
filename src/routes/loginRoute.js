'use strict'
const express = require("express");
const router = express.Router();
const loginService = require('../services/loginService');

router.post("", async (request, response) => {
    //     console.log('request.params.id :>> ', request.params.id);
    //     // console.log('request :>> ', request);
        console.log('request.body :>> ', request.body);
    //     return response.json(await loginService.autenticar(request.body));
    return response.json(await loginService.autenticar(request.body));
});

module.exports = router;