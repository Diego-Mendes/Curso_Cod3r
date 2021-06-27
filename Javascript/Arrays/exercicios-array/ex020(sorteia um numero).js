//Math.random(x, y) gera um numero aleatorio entre X e Y, mas ele vem em decima então multiplica por 10

const megaSena = function(number){
    const aleatorio = (Math.random(1, 10) * 10).toFixed(0)

    return number == aleatorio ? `Parabéns! O número sorteado foi o ${aleatorio}` : `Que pena! O número sorteado foi o ${aleatorio}`
}

console.log(megaSena(5))
console.log(megaSena(1))
console.log(megaSena(2))
console.log(megaSena(3))
console.log(megaSena(4))
console.log(megaSena(6))
console.log(megaSena(7))
console.log(megaSena(8))
console.log(megaSena(9))
console.log(megaSena(10))
