function fazerPedido(item, qtd=1){
    let preçoPagar=0;
    switch(item){
        case 100:
            preçoPagar = 3 * qtd
            return preçoPagar
            break;

        case 200:
            preçoPagar = 4 * qtd
            return preçoPagar
            break;

        case 300:
            preçoPagar = 5.5 * qtd
            return preçoPagar
            break;

        case 400:
            preçoPagar = 7.5 * qtd
            return preçoPagar
            break;

        case 500:
            preçoPagar = 3.5 * qtd
            return preçoPagar;
            break;

        case 800: 
        preçoPagar = 2.8 * qtd
        return preçoPagar
        break;

        default:
            console.log("Este item não existe")
            break;
    }

}

console.log(fazerPedido(100))
console.log(fazerPedido(300, 2))
console.log(fazerPedido(200, 3))
console.log(fazerPedido(700, 1))
