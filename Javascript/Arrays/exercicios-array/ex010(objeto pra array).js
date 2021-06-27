
//recebe um objeto e retorna um array de array
//pega as chaves dos objetos e faz um map com elas, assim ele retorna a propria chave mais o elemento correspondente aquela chave, tudo como array
const RetornaValores = function(obj){
    const chaves = Object.keys(obj)
    const resultado  = chaves.map(chave => [chave, obj[chave]])

    return resultado
}


const obj = {
    nome: 'diego',
    idade: 21,
    genio: true
}
console.log(RetornaValores(obj))

//Segunda forma Object.entries
//recebe um elemento(objeto) e retorna um array de array
//ex: [[chave], [elemento]]
const RetornaValores2 = function(obj){
    return Object.entries(obj)
}

console.log(RetornaValores2(obj))