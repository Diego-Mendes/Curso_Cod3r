const pontos1 = [10, 29, 30, 1, 11, 22, 31]
const pontos2 = [10, 29, 30, 15, 45, 16, 51, 0]

const PegaMaior = function(array){
    array = Math.max.apply(null, array)
    return array
}

const PegaMenor = function(array){
    array = Math.min.apply(null, array)
    return array
}

function tabela (temp1, temp2){
    let recorde = PegaMaior(temp1)
    let quebraRecorde=0;
    let piorPontuacao= PegaMenor(temp1);
    let quebraPior = 1;
    for(let n in temp2){
        if(temp2[n] > recorde){
        quebraRecorde++;
        }else if(temp2[n] < piorPontuacao){
            piorPontuacao = temp2[n]
            quebraPior = n;
            quebraPior = parseInt(quebraPior) + 1
        }
    }

    return [quebraRecorde, quebraPior]
    
}

console.log(tabela(pontos1, pontos2))