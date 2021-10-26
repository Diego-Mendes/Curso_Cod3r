//... 
//rest = juntar / spread = espalhar

//spread com objeto:

const funcionario = {nome: 'Jão', salario: 1110}

//espalha os atributos de funcionários no clone
const clone = {ativo: true, ...funcionario}
console.log(clone)

//spread com array:

const groupA = ['diego', 'otavio']
const groupFinal = ['caio', 'italo', ...groupA]
console.log(groupFinal)




