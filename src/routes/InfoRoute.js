'use strict'
const express = require("express")
const router = express.Router()

router.get("", (request, response) => {
    response.json({
        nome: "Contas API",
        Status: "OK"
    })
});
module.exports = router;