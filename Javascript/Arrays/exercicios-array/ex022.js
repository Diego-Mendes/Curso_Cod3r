const contaRepetição = function(frase, charcter){
    frase = frase.split('')

    let repeticoes=0
    frase.forEach(letra => {
        if(letra == charcter){
            repeticoes++
        }
    })

    return repeticoes
}

console.log(contaRepetição("Hello World", 'l'))
console.log(contaRepetição("Hello World", 'h'))