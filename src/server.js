"use strict"

const express = require("express");
const cors = require("cors");
const api = express();
const middlewareLog = require('./middlewares/log')
const { verificarToken } = require("./middlewares/auttenticacaoMiddleware");

api.use(cors({ origin: "*" }));
api.use(express.json());

const contaRoute = require("./routes/contaRoute");
api.use('/conta',verificarToken, middlewareLog.log, contaRoute);

const infoRoute = require("./routes/InfoRoute")
api.use('/info', infoRoute);

const usuarioRoute = require('./routes/usuarioRoute')
api.use('/usuario', usuarioRoute)

const loginRoute = require('./routes/loginRoute');
api.use('/login', loginRoute)

const db = require('./db/index').connect();

db.then(() => {
    console.log("Banco de dados conectado com sucesso!");
}).catch((error) => {
    console.error(error);
});


module.exports = api;





//  GET(Busca Info) POST(Salva Info)  PUT(Edita Info) DELETE(Apaga Info)