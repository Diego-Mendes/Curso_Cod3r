const feira = function (fruta){
switch(fruta){
    case 'maçã':
        console.log('Não vendemos essa fruta aqui')
        break;
    
    case 'kiwi':
        console.log('Está em falta')
        break;

    case 'melancia':
        console.log('Aqui está, são R$ 3,00 o kg')
        break;

    default:
        console.log("Erro!")
        break;

}
}

feira('maçã')
feira('kiwi')
feira('melancia')
feira('laranja')