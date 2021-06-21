const repeteNumero = function(a, b){
    let ArrayResultado = []
    for(let i=0; i < b; i++){
        ArrayResultado.push(a)
    }

    return ArrayResultado
}
console.log(repeteNumero(3, 9))


//Segunda forma
const repeteNumero2 = function(a, b){
    return Array(b).fill(a)
}
 
console.log(repeteNumero2(3, 9))