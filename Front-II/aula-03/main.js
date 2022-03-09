import somar from '.soma.js'

let primeiroNumero = converterNumero(prompt('Insira o primeiro número'))
let segundoNumero = converterNumero(prompt('Insira o primeiro número'))

function converterNumero(numero){
    return parent(numero)
}

console.log( somar(primeiroNumero, segundoNumero))