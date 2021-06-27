const somenteNumeros = function(array){
   const newArray = []
    array.map(elemento => {
        const tipo = typeof elemento
        if(tipo == "number"){
            newArray.push(elemento)
        }
    })

    return newArray
}
 
console.log(somenteNumeros(["javascript", 21, 10,true]))