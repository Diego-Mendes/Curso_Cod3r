console.clear()

//função factory
function criarObjeto(raio){
    return{
        area: 3.14 * (raio**2),
        circunferencia: 2 * 3.14 * raio
    }
}

console.log(criarObjeto(20))
console.log(criarObjeto(10))
console.log(criarObjeto(5))