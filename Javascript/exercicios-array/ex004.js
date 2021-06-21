
const nomedoMes = function (mes){
    switch(mes){
        case 1:
            return 'Janeiro'
            break;

        case 2: 
        return 'Fevereiro'
        break;

        case 3: 
        return 'Março'
        break;

        case 4:
            return 'Abril'
            break;

        case 5:
            return 'Maio'
            break;

        case 6:
            return 'Junho'
            break;

        case 7:
            return 'Julho'

        case 8:
            return 'Agosto'
            break;

        case 9: 
        return 'Setembro'
        break;

        case 10: 
        return 'Outubro'
        break
        
        case 11:
            return 'Novembro'
            break

        case 12:
            return 'Dezembro'
            break;

        default:
            return "Mês inválido!"
            break;

    }
}

console.log(nomedoMes(1))
console.log(nomedoMes(7))
console.log(nomedoMes(100))