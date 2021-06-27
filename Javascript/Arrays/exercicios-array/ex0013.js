const removerPropriedade = function(obj, prop){
    const objCopia = Object.assign({}, obj)
    delete objCopia[prop]

}




const obj1 = {
    nome: 'Diego',
    idade: 17,
    genio: true
}
console.log(removerPropriedade(obj1, "genio"))