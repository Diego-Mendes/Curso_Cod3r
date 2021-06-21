const turmas = [
    {
        turma: 'ST2',
        alunos: [{nome: 'Diego', nota:10}, {nome: 'Otávio', nota:10}]
    }
,
    {
        turma: 'Enfer2',
        alunos: [{nome: 'Vivi', nota:5}, {nome: 'Ana', nota:7}] 
    }
] 

const getNota = n => n.nota
const getNotaTurma = t => t.alunos.map(getNota)

const notas1 = turmas.map(getNotaTurma)

console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = turmas.flatMap(getNotaTurma)
console.log(notas2)