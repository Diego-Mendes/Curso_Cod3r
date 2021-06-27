//método reverse inverte os elementos de um array. Nesse caso ele inverte o chave e valor do array.

const inverteObjeto = function(obj){
   const invertido = Object.entries(obj).map(chavevalor => chavevalor.reverse())


   //método fromEntries pega um conjunto de valores e transforma em chave-valor.
   //ex: ['1', 'a'] = {1:a}
   return Object.fromEntries(invertido)
}

console.log(inverteObjeto({a: 1, b:2, c:3}))