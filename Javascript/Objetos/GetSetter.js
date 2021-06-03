const numeros = { _valor: 1, 
    get valor(){
    return this._valor++}, 
    set valor(valor){this._valor = valor}}

console.log(numeros.valor, numeros.valor)
numeros.valor = 10;
console.log(numeros.valor, numeros.valor)