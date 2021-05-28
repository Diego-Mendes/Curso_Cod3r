function calculadora(n1, n2, operacao='+'){
    switch(operacao){
        case '+':
            return n1+n2
            break;

        case '-':
            return n1-n2
            break;

        case '*':
            return n1*n2
            break;

        case '/':
            return n1/n2
            break;

        default:
            console.log("Operação inválida!")
            break;
    }
}

console.log(calculadora(5, 5, '+'))
console.log(calculadora(5, 5,))
console.log(calculadora(5, 5, '*'))
console.log(calculadora(5, 5, '/'))
console.log(calculadora(5, 5, '**'))