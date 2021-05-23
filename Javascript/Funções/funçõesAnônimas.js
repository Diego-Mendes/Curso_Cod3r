//função pronta de soma
const soma = function (x, y){
    return x+y
}

//se o valor de operação (uma function) não for passado ele atribui a função soma
const calcular = function (a, b, operacao = soma){
    console.log(operacao(a,b))
}

//---------------------------------------------------------------------------

//não passa o valor de operação, então soma os números
calcular(5, 5)

//passa uma função que subtrai
calcular(1, 3, function(v1, v2){
    return v1-v2
})

//passa uma função que eleva o primeiro ao segundo
calcular(10, 5, function(v1, v2){
    return v1**v2
})

//passa uma arrow function que multiplica
calcular(2, 4, (v1, v2) => v1*v2)