const pessoa = {nome: 'Indefinido', idade: 00, vivo: true}

const sher = Object.create(pessoa)
sher.nome = 'Sherlock Holmes'
sher.idade = 30
sher.vivo = false

//criando um objeto filho de 'pessoa' e setando propriedades no elemento 'rico'
const em = Object.create(pessoa, {
    rico: {value: true, writable: false, enumerable: true}, 
}
)

em.nome = 'Elon Musk'
em.idade = 49
em.rico = false

console.log(pessoa)
console.log(sher)
console.log(em)

//percorrendo os elementos de em:
for(let key in em){
    console.log(key)
}

console.log('-----------------------------------------------')

for(let key in pessoa){
    em.hasOwnProperty(key) ? 
    console.log(key) : console.log(`O objeto não possui a propriedade: ${key}`)
}