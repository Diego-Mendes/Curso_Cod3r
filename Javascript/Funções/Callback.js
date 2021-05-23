const marcas = ["mercedes", "audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice +1}.${nome}`)
}

marcas.forEach(imprimir)
marcas.forEach(a => console.log(a))