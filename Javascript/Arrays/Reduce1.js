const alunos = [
    {nome: 'Diego', nota: 5, bolsista: false},
    {nome: 'Otávio', nota: 10, bolsista: true},
    {nome: 'Itín', nota: 1, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(ant, atual, indice){
    console.log(ant, atual, indice)
    return  ant + atual
})

console.log(resultado.toFixed(2))


//programinha que calcula o vetorial de um número:
const transformArray = function (n){
   const newarray = []
    for(let i=1; i <= n; i++){
        newarray.push(i)
    }

    const resultado = newarray.reduce(function(ant, atl){ return ant * atl})
       // console.log(newarray) 
        return resultado
}

console.log(transformArray(5))
console.log(transformArray(3))
console.log(transformArray(7)) 