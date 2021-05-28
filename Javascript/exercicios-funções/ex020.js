function banco(saque){
    let nota100 = 0;
    let nota50 =0;
    let nota10=0;
    let nota5=0;
    let moeda1=0;
    let cedulas = calculaCedulas(saque);

    while(saque >= cedulas){
        switch(cedulas){
            case 100:
                nota100++
                saque -= 100;
                break;

            case 50:
                nota50++
                saque -= 50
                break

            case 5:
                nota5++
                saque -= 5
                break

            case 10:
                nota10++
                saque -= 10
                break

            case 1: 
            moeda1++
            saque -= 1
            break

        }

        cedulas = calculaCedulas(saque)
    }

    return imprimir(nota100, nota50, nota10,nota5, moeda1,)
}

const imprimir = function (nota100=0, nota50=0, nota10=0, nota5=0, moeda1=0){
    if(nota100 > 0){
        console.log(`${nota100} nota(s) de R$ 100`)
    }
    if(nota50 > 0){
        console.log(`${nota50} nota(s) de R$ 50`)
    }
    if(nota10 >0){
        console.log(`${nota10} nota(s) de R$ 10`)
    }
    if(nota5 >0){
        console.log(`${nota5} nota(s) de R$ 5,00`)
    }
    if(moeda1 > 0){
        console.log(`${moeda1} moeda(s) de R$ 1,00`)
    }
}

const calculaCedulas= function (vsaque){
    if(vsaque >= 100){
        return 100
    }else if(vsaque >= 50){
        return 50
    }else if(vsaque >= 10){
        return 10
    }else if(vsaque >= 1){
        return 1
    }
}

banco(150)
console.log("----------------------------------")
banco(233)
console.log("----------------------------------")
banco(2635)

console.log("O banco NósTodos agradece sua contribuição, bacana")