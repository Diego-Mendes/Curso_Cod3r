Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    {nome: 'Notebook Gamer', preco: 4999, fragil:true},
    {nome: 'Televisão', preco: 2499, fragil: true},
    {nome: 'tijolo', preco: 600, fragil: false},
    {nome: 'película', preco: 15, fragil: false}
]


//outra forma de fazer a mesma coisa que em cima
const caro = p => p.preco > 500
const fragil = p => p.fragil

console.log(produtos.filter2(caro).filter2(fragil))
