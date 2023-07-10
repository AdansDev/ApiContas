'use strict'
const express = require("express");
const router = express.Router();
const loginService = require('../services/loginService');

router.post("", async (request, response) => {
    const result = await loginService.autenticar(request.body);

    if (!result.success) {
        return response.status(result.status).json(result);
    }

    return response.json(result);
});

module.exports = router;