function valorMonetario (x=0.1, y=0.2){
    let resultado = x + y

    return `R$ ${resultado.toFixed(2).replace('.', ',')}`
}

console.log(valorMonetario(0.5, 0.3))
console.log(valorMonetario(0.54, 0.33))
console.log(valorMonetario(0.2325, 0.3342))
console.log(valorMonetario(0.5, Math.E))