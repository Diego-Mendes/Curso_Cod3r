const alunos = [
    {nome: 'Diego', nota: 5, bolsista: true},
    {nome: 'Otávio', nota: 10, bolsista: true},
    {nome: 'Itín', nota: 1, bolsista: false}
]

//Desafio



const VerificaArray = (anterior, atual) => anterior && atual  

console.log(alunos.map(a => a.bolsista).reduce(VerificaArray))




