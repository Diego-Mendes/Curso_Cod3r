const aprovados = ['Diego', 'Otávio', 'Itílson']

//o foreach percorre o array e pega o elemento = nome, e o indice = indice, e joga nessa função.
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1} ${nome}`)
})

//a função exibe o valor passado, no caso os elementos que vão ser percorridos pelo foreach embaixo.
const SoAprovados = (aprovado) => console.log(aprovado)
aprovados.forEach(SoAprovados)
