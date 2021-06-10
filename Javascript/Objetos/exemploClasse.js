class Personagem{
    constructor(_nome, vida=0, power=0){
        this.nome = _nome
        this.vida = vida
        this.power = power
    }

   
}

class Raça extends Personagem{
    
   constructor(nome, raca, vida, power){
       super(nome, vida, power)
       this.raca = raca
      
       
   }

   

   escolheRaca(){
       switch(this.raca){
           case 'Humano':
               this.setVida(300)
               if(this.vida > 300){
                   this.vida = 300
               }
             //  this.power = 0;
               break

            case 'Hobbit':
                this.setVida(100)
                if(this.vida > 100){
                    this.vida = 100
                }
                //this.power = 0;
                break

            case 'Mago':
                this.setVida(500)
                this.setPoder(300)
                if(this.vida > 500 || this.power > 300){
                    this.vida = 500
                    this.power = 300
                }
                break
       }
   }
   

   setPoder(add){
    
    this.power += add
}

    setVida(add){
    this.vida += add
        
    }
 

   show(){
        this.escolheRaca()     
        return `O personagem ${this.nome} tem ${this.vida} de vida e ${this.power} de poder`
   }
}


const person2 = new Raça('Diego', 'Humano')
const person3 = new Raça('Bilbo', 'Hobbit')
const person4 = new Raça('Gandalf', 'Mago')


console.log(person2.show())
console.log(person3.show())
console.log(person4.show())

