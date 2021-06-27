//recebe o array com param. depois entra num for que incrementa a variavel de controle de 2 em 2(resolve o problema do indice par) e confere se naquele indice o elemento é par e armazena em IsPar. Se ispar for true então ele adiciona aquele indice no novo array gerado.

const elementosPar =  function(array){
    const newArray = []
   for(let i=0; i < array1.length; i+= 2){
       const isPar = array[i]%2 === 0

       if(isPar){
           newArray.push(array[i])
       }
   }

   return newArray
}

const array1 = [2, 4, 6, 7]
const array2 = [3, 9, 10]

console.log(elementosPar(array1))