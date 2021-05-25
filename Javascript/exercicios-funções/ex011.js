function verificaAno(ano){
    let anoatual = 2021;

    if(ano - anoatual == 400 || ano - anoatual == -400 ){
        return true
    }
    else if(ano - anoatual == 100 || ano - anoatual == -100){
        return false
    }else if(ano % 4 == 0){
        return true
    }else{
        return false
    }
}

console.log(verificaAno(2020))
console.log(verificaAno(1988))
console.log(verificaAno(1997))
console.log(verificaAno(2021))