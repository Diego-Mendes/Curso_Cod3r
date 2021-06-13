const nums = [2, 3, 4, 5, 6]

//retorna as raizes quadradas que os numeros formam
let resultado = nums.map(function(e){
    return e * e
})
console.log(nums, resultado)

//duas novas funções 
const soma20 = e => e+20
const monetario = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//concatena as 2 funções que vão ser executadas pelo map
resultado = nums.map(soma20).map(monetario)
console.log( resultado)