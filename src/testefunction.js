//  função nomeada
function teste1(n1, n2) {
    return n1 + n2
}
const resultado1 = teste1(10, 10)
console.log('resultado1 :>> ', resultado1);

//   função anonima
const teste2 = function (n1, n2) {
    return n1 + n2
}
const resultado2 = teste2(10, 20)
console.log('resultado2 :>> ', resultado2);

//  funçao arqueada (arrow) '=>'
// toda arrow é anonima
// não usa a palavra function e dependendo  não precisa usar as '{}'
// e nem a palavra 'return'

const teste3 = (n1, n2) => {
    return n1 + n2
}
const resultado3 = teste3(10, 40)
console.log('resultado3 :>> ', resultado3);

// não é possivel, nesse caso, utilizar mais de uma função dentro da variavel
const teste4 = (n1 ,n2) => n1 + n2;
const resultado4 = teste4 (10,50);
console.log('resultado4 :>> ', resultado4);

// function (sem parametros) representada pelo '_' ao inves dos "()"
const teste5 = _ => console.log("Function sem parametros"); 
teste5()