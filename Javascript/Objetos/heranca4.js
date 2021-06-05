const meuObj = function (){}
    console.log(meuObj.prototype)

const obj1 = new meuObj
const obj2 = new meuObj


meuObj.prototype.senha = 40028922 

meuObj.prototype.cofre = function (senha){
    if(senha == this.senha){
        console.log("Cofre liberado")
    }else{
        for(let i=0; i < 11; i++){
        console.log(`Auto-destruição em ${i}`)
        }
    }
}

obj1.cofre(obj1.senha)
Object.freeze(meuObj.prototype.senha) //congela o atributo senha
obj2.senhanova = obj2.senha * 3 //tentou mudar mas não conseguiu
obj2.cofre(obj2.senhanova)

