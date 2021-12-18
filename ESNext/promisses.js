//é uma promessa. Uma operação que espera um resultado acontecer pra ser chamada/rejeitada

function falarDepoisDe(s, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, s * 1000)
    })
} 

falarDepoisDe(3, 'Hello World')
    .then(frase => frase.concat('!!')) //resolve
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //reject