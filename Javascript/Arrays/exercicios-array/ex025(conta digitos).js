const filtraQuantidade = function(array, digitos){
    const newArray = []

    //método String transforma o numero em uma string e conta os caracteres
    array.map(element => {
        if(String(element).length == digitos){
            newArray.push(element)
        }
    })

    return newArray
}

console.log(filtraQuantidade([10, 222, 0], 2))