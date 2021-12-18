//percorre os valores:
for (let letras of "Cod3r"){
    letras.toUpperCase()
    console.log(letras)
}
console.log("-------------------------------")


//percorre os índices:
const javs = ['map', 'set', 'promisses']
for(let i in javs){
    console.log(i)
}

console.log("-------------------------------")

const javsMap = new Map([
    ['map', {abordado: true}],
    ['set', {abordado: true}],
    ['promisse', {abordado: false}]
])

for (let a of javsMap.values()){ //pegando só os valores
    console.log(a)
}

console.log("-------------------------------")

//destructuring. Pega a chave e valor e separa:
for (let [cv, vl] of javsMap.entries()){
    console.log(cv, vl)
}

