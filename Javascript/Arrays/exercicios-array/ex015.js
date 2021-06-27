const transformaArray = function(obj){
    const objArray = Object.entries(obj)
    return objArray
}

console.log(transformaArray({nome: "diego", idade:21}))