Array.prototype.reduce2 = function(callback){
   
    let ant = this[0]
    for(let i=0; i < this.length; i++){
       ant = callback(ant, this[i], i, this)
    }

    return ant
}
const soma = (v1, v2) => v1*v2
const numeros = [1, 2, 3, 5, 6]
console.log(numeros.reduce2(soma))