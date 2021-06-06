//Object.prevenExtensions
//Pode excluir os elementos mas não pode adicionar nem alterar
const cerebro = { função: 'Pensar e Controlar', Programável:'Talvez'}
Object.preventExtensions(cerebro)
console.log(Object.isExtensible(cerebro))


//Object.seal
//consegue alterar mas não adicionar nem deletar
const coracao = {função: 'bombear sangue', programável: 'Não'}
Object.seal(coracao)
console.log(Object.isSealed(coracao))

//Object.freeze 
//selado + valores constantes

Object.freeze()