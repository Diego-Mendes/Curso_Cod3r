Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i=0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "borracha", "preco": 5.82}',
    '{"nome": "borracha", "preco": 10.22}',
    '{"nome": "borracha", "preco": "o dólar ainda tá 6 conto ai? kkkkkkk"}'
]

 //transforma os jsons em objeto
const CoverteJson = json => JSON.parse(json)

//retorna no os atributos 'preco'
const apenasPreco = item => `R$ ${item.preco}`.replace('.', ',')
//usa as duas funções com map:
const NovoCarrinho = carrinho.map2(CoverteJson).map2(apenasPreco)
console.log(NovoCarrinho)
