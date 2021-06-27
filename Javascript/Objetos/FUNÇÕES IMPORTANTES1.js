 Object.Keys(obj) //retorna as chaves de um objeto

 Object.value(obj) //retorna os elementos

 Object.entries(obj) // coloca os elementos em um array

//define um elemento e seta propriedades
Object.defineProperty(obj, 'elemento')
    enumerable: //se pode ser listado
    writable: //se pode ser redefinido


Object.assign(destino, a, b) //concatena objetos

Object.freeze(obj) //congela objetos

Object.assign(destino, origem) // copia as propriedades de origem para destino

Object.is(elemento1, elemento2) // verifica se os dois elementos possuem valores iguais

//método fromEntries pega um conjunto de valores e transforma em chave-valor.
//ex: ['1', 'a'] = {1:a}
Object.fromEntries()