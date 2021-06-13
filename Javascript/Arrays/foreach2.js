const obj = ['PEdro', 'Jão', "Thiago"]

//Simulando o que ocorre dentro de um forEach:

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
//usamos nosso próprio foreach:
obj.forEach2(function(nome, indice){
    console.log(`${indice+1} ${nome}`)
})

//ocorre a mesma coisa do exemplo anterior