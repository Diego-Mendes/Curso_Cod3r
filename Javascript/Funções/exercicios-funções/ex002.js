function verificarTriangulo (l1, l2, l3){
    if(l1 == l2 && l1 == l3){
        return 'Equilátero'
    }else if(l1 == l2 || l2 == l3 || l1 == l3){
        return 'Isóceles'
    }else if(l1 != l2 && l2 != l3 && l1 != l3){
        return 'Escaleno'
    }
}

console.log(verificarTriangulo(3, 6, 8))
console.log(verificarTriangulo(8, 8, 8))
console.log(verificarTriangulo(6, 6, 8))