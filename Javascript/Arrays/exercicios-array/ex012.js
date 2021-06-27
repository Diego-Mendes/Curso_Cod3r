const anoBissexto = function(ano){
    if(ano%4 === 0){
        return true
    }else if(ano%100 === 0){
        if(ano%400 === 0) return true
        else{return false}
    }
    else{return false}
}

console.log(anoBissexto(2018))
console.log(anoBissexto(2020))