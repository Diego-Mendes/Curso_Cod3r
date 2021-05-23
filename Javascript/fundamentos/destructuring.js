//pega o array passado na chamada e desestrutura para usar os valores
function aleatorio([min = 0, max = 1000]){
    //se min for maior que max então ele usa um destructuring para inverter os valores     destructr.    array
    if(min > max) [min, max] = [max, min]
    
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

//passa um array como argumento:
//exibe um número aleatório no intervalo passado
console.log(aleatorio([1000, 100]))

