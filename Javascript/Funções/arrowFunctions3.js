//função arrow
let comparaThis2 = p2 => console.log(p2 === this)

//não pertence ao global
comparaThis2(global)


comparaThis2(module.exports)

//This numa arrow function NUNCA varia. Referencia a função em que está armazenada a variável;