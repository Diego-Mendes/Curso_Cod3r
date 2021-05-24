const bhaskara = function (ax2, bx, c){
    const resultado =[]
    
    let delta =(bx**2) - (4 * ax2 *c)
   if( delta < 0){return 'Delta neagtivo'}

    let x1 = -(bx) + Math.sqrt(delta)/ 2*ax2
    let x2 = -(bx) - Math.sqrt(delta)/ 2*ax2

    resultado.push(x1.toFixed(1))
    resultado.push(x2.toFixed(1))

    return resultado
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(1, -30, 10))
console.log(bhaskara(3, 5, 2))
console.log(bhaskara(3, 3, -2))
