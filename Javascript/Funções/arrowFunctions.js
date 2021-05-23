//função normal
let dobro = function (a){
    return 2*a
}

//função anônima
let dobro2 = (a) => {
return a *2
}


//quando tem só um argumento; função de uma linha só
let dobro3 = a => 2*a //return implícito

//função sem parâmetro:
let text = () => 'Esse é o número de Euler vezes 2'

console.log(dobro3(Math.E.toFixed(2)))
console.log(text())

