const array1 = [
    {produto: "celular", preco: 399},
    {produto: "Tablet", preco:799},
    {produto: "Tv", preco:7199},
]


//método 2:
const despesasTotal2 = function(array){

    return array.map(element => element.preco).reduce((ant, atu) => ant+atu)
}

//método 1:
const despesasTotal = function(array){
    let precoTotal=0;

    array.forEach(element => {
        precoTotal += element.preco
    });

    return precoTotal
}

console.log(despesasTotal(array1))
console.log(despesasTotal2(array1))