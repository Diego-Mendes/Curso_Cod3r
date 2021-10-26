//forma diferente de instanciar objetos
const stacks = new Map()

//set pra atribuir
//nome do objeto, {valores do objeto}
stacks.set("react", {framework: false })
stacks.set("angular", {framework:true})

//get pra acessar
console.log(stacks.get('react'))


const chavesVariadas = new Map([
    [function () {}, 'função'],
    [{}, 'obj'],
    [123, 'numero']
])


chavesVariadas.forEach((vl, cv) => {
    console.log(vl, cv)
})

console.log(chavesVariadas.has(123)) //verifica se um valor existe
console.log(chavesVariadas.size) //numero de valores no map