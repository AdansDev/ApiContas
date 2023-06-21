"use strict"

const express = require("express");
const cors = require("cors");
const api = express();
const contaRoute = require("./routes/contaRoute");
const infoRoute = require("./routes/InfoRoute")
const db = require ('./db/index').connect();
const usuarioRoute = require ('./routes/usuarioRoute')
const loginRoute = require('./routes/loginRoute')

db.then(()=> {
    console.log("Banco de dados conectado com sucesso!");
}).catch((error) =>{
    console.error(error);
});

api.use(cors({origin: "*"}));
api.use(express.json());
api.use('/conta' , contaRoute);
api.use('/info' , infoRoute);
api.use('/usuario' , usuarioRoute)
api.use('/login' , loginRoute)

module.exports = api;





//  GET(Busca Info) POST(Salva Info)  PUT(Edita Info) DELETE(Apaga Info)