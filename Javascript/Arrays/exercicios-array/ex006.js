const intervalo = function(numero, min, max, inclusivo=false){
    if(inclusivo){
        if(numero >= min && numero <= max ){
            return true
        }else{return false}
    }
    else{
        if(numero > min && numero < max){
            return true
        }else{return false}
    }
}

console.log(intervalo(20, 0, 20, true))