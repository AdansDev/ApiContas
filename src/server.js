// 
"use strict";

const express = require("express");
const cors = require("cors");
const api = express();
api.use(express.json());

const db = require("./db").connect();

const middlewareLog = require('./middlewares/log')
const { verificarToken } = require("./middlewares/auttenticacaoMiddleware");
const contaRoute = require("./routes/contaRoute");
const usuarioRoute = require('./routes/usuarioRoute')

const loginRoute = require('./routes/loginRoute');

db.then(() => {
  console.log("Banco de dados conectado com sucesso...");
}).catch((error) => {
  console.error(error);
});

api.use(
  cors({
    origin: "*",
  })
);


api.get("/info", (request, response) => {
  response.json({
    nome: "API Contas",
    status: "OK",
  });
});

api.use("/conta", verificarToken, middlewareLog.log, contaRoute);

api.use("/usuario", usuarioRoute);

api.use("/login", loginRoute);

module.exports = api;


// "use strict"

// const express = require("express");
// const cors = require("cors");
// const api = express();
// const middlewareLog = require('./middlewares/log')
// const { verificarToken } = require("./middlewares/auttenticacaoMiddleware");
// const contaRoute = require("./routes/contaRoute");
// const infoRoute = require("./routes/InfoRoute")
// const usuarioRoute = require('./routes/usuarioRoute')

// const db = require('./db/index').connect();

// api.use(cors({ origin: "*" }));
// api.use(express.json());

// // const loginRoute = require('./routes/loginRoute');
// // api.use('/login', loginRoute)

// api.use('/conta', verificarToken, middlewareLog.log, contaRoute);

// api.use('/info', infoRoute);

// api.use('/usuario', usuarioRoute)

// db.then(() => {
//     console.log("Banco de dados conectado com sucesso!");
// }).catch((error) => {
//     console.error(error);
// });

// module.exports = api;