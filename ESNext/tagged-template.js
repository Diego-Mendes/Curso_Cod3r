//processar uma template string dentro de uma função

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = "Diego"
const situacao = "aprovado"
console.log(tag `${aluno} está ${situacao}`)

//-----------------

function real(partes, ...valores){
    const resultad = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultad.push(partes[indice], valor)
    })

    return resultad.join('')
}

const preco = 39.99
const parcela = 10
console.log(real `1x de ${preco} ou 4x de ${parcela}`)