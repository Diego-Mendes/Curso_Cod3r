function planos(salarioAtual, plano){
    console.log(`O salário atual é de R$ ${salarioAtual}`)
    let aumento=0;

    switch(plano){
        case 'a':
            aumento = salarioAtual * 0.10
            console.log(`O salário nesse plano é de R$ ${aumento + salarioAtual}`)
            break;

        case 'b':
            aumento = salarioAtual * 0.15
            console.log(`O salário nesse plano é de R$ ${aumento + salarioAtual}`)
            break
        
        case 'c':
            aumento = salarioAtual * 0.20
            console.log(`O salário nesse plano é de R$ ${aumento + salarioAtual}`)
            break;

        default:
            console.log('Plano inválido')
            break;


    }

    //console.log(`O salário nesse plano é de R$ ${aumento + salarioAtual}`)
}

planos(1500, 'a')

planos(1200, 'b')

planos(2000, 'c')

planos(500000, 'd')