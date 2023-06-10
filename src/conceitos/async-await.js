'use strict'
const dirigir = new Promise((resolve, reject) => {
    const temGasolina = false;
    if (temGasolina) {
        resolve('O carro funcionou!');
    }
    reject(' O carro não tem gasolina!')

});

async function testarAsyncAwait() {
    try {
        const resultado = await dirigir;
        console.log(resultado);
        } catch (error) {
        console.log(error);
    }
}
testarAsyncAwait()