
// retorna a string invertida
String.prototype.reverse = function (){
    return this.split('').reverse('').join('')
}

//retorna o primeiro elemento de um array
Array.prototype.first = function(){
    return this[0]
}

//retorna o indice de um elemento de um array
Array.prototype.index = function (n){
    return this.indexOf(n)
}

//Retorna  a string em maiscula
String.prototype.Upper = function (){
    return this.toUpperCase()
}

console.log('Diego Mendes'.reverse())
console.log([10, 09, 937, 82].first())
console.log("diego mendes".Upper())
console.log([1,2,3,4,5,].index(1))