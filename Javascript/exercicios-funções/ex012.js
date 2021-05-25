function fatoriar(num){
    let resultado = num 
    for(let i=1; i < num; i++){
        resultado *= i;
    }

    return resultado.toFixed(2)
}

console.log(fatoriar(5))
console.log(fatoriar(7))
console.log(fatoriar(10))
console.log(fatoriar(2))
