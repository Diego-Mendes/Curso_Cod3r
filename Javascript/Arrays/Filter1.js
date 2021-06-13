const produtos = [
    {nome: 'Notebook Gamer', preco: 4999, fragil:true},
    {nome: 'Televisão', preco: 2499, fragil: true},
    {nome: 'tijolo', preco: 600, fragil: false},
    {nome: 'película', preco: 15, fragil: false}
]

console.log(produtos.filter(function(p){
    if(p.preco > 500){
        if(p.fragil){
            return true
        }
    }
}))

//outra forma de fazer a mesma coisa que em cima
const caro = p => p.preco > 500
const fragil = p => p.fragil

console.log(produtos.filter(caro).filter(fragil))

