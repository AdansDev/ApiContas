"use strict"
const api = require("./server")



api.listen(3000, () => {
    console.log("Servidor backEnd rodando em http://localhost:3000");
})