//primeiro soma todos os elementos com o metodo reduce, depois retorna esse valor dividido pelo numero de valores do array

const mediaElementos = function(array){
    const soma = array.reduce((ant, atu) => ant+atu )

    return `R$ ${(soma/array.length).toFixed(2)}`
}

console.log(mediaElementos([20, 10, 52, 100]))