"use strict"


module.exports = {
    log: (request, _response, next) => {
        console.log("Acessou a Rota: " + request.originalUrl + "em:" + new Date()
        );
        return next();
    },
};