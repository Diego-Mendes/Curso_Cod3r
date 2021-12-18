const times = new Set()

times.add('Vasco')
times.add('São Paulo').add('Flamengo')

//Não aceita repetição repetição: 
times.add('Vasco')

console.log(times.size) //num de elementos
console.log(times.has('Vasco')) //tem esse elemento?
times.delete('São Paulo') //deleta

console.log(times)