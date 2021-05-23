function pessoa() {
    this.idade = 0

   // const self = this

    SetIntervalo(function() {
        this.idade++;
        console.log(this.idade);

    }.bind(this), 1000) 

}

new pessoa

