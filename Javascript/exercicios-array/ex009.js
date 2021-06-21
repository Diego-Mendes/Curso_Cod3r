const ArrayValores = [7, 2, 'Olá']
/* primeira forma
const RetornaMenor = a =>  a.shift()
const retornaMaior = a => a.pop()

console.log(RetornaMenor(ArrayValores), retornaMaior(ArrayValores)) */

//segunda forma
const novoArray = function(array){
    let primeiroElemento = array.shift()
    let ultimoElemento = array.pop();

    return [primeiroElemento, ultimoElemento]
}

console.log(novoArray(ArrayValores))