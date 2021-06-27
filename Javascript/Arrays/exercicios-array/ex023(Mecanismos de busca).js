//metodo includes retorna todos os elementos de palavras que contenham caracteres iguais aos passados em busca

const buscaPalavras = function(busca, palavras){
    return palavras.filter(palavra => palavra.includes(busca))
}

console.log(buscaPalavras("pro", ['programação', 'profissão', 'objeto']))