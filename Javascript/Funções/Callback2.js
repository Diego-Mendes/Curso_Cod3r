const notas = [2.2, 3.5, 7, 2, 0, 9, 10]

//cria um novo array a partir dos elementos que retornarem true para a condição
let notasBaixas = notas.filter(nota =>  nota < 6)
console.log(`Reprovados ${notasBaixas}`)

//mesma coisa de cima mas com notas maiores que 6
let notasAltas = notas.filter(nota => nota > 6)
console.log(`Aprovados ${notasAltas}`)