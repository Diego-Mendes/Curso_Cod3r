//HERANÇA

class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //EXTENDS
    constructor(sobrenome, nome = 'Diego'){
    super(sobrenome)
    this.nome = nome
    }
}

class Filho extends Pai {
    constructor(){
        super('Mendes')
    }
}

const filho = new Filho
console.log(filho)