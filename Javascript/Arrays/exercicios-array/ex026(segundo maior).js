const pegaMaior = function(array){
    //tira o maior do array
    const maiorValor = Math.max(...array)
    array = array.filter(element => element != maiorValor)

    //pega o maior dos que sobrou
    const segundoMaior = Math.max(...array)
    return  segundoMaior  
}

console.log(pegaMaior([6523, 82636, 100000]))