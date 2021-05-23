function Pessoa(){
    this.idade = 0

    //o This não varia com uma função arrow
    setInterval (() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
