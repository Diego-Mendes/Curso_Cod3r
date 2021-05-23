function produto (p, nome){
    const imposto = (p*10) /100
    return {
        nome,
        preço: imposto + p 
    }
}

console.log(produto(100, 'Ferro de passar'))
console.log(produto(3000, 'Pc gamer'))
console.log(produto(10000, 'Iphone 15'))