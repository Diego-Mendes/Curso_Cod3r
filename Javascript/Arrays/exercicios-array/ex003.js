const calcularSalario = function (htb, slr){
    let salario = htb*slr
    
    return `Salário líquido igual a ${(salario * (1 - 0.3)).toFixed(2)}` 
}

console.log(calcularSalario(240, 13))