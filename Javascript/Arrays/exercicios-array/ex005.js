const inversao = function(valor){
    let tipo = typeof valor
    if(tipo ==  "boolean"){
        return !valor
    }else if(tipo == "number"){
        return -valor
    }
}

console.log(inversao(true))
console.log(inversao(100))