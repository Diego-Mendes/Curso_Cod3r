const porcentagem = (v, t) => `${(v/t).toFixed(2) * 100}%`
console.log(porcentagem(250, 686))

const {idade: i, nome} = {nome: 'Diego', idade: 18}
console.log(i, nome)

//this
const lexico1 = () => console.log(this === exports)
lexico1()

//operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    console.log(total)
}
total(1, 3, 5)

//Object.entriees
const nome2 = 'Cooper'
const obj = {a:1, nome2, ola(){}}
console.log(Object.entries(obj))

//classe
class Calculadora{
    calcular(v1, v2) { return v1+v2}
}

const miseravi = new Calculadora
console.log(miseravi.calcular(10, 6))

