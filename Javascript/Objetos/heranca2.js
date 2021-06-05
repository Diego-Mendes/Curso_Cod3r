//cadeia de protótipos (protorype chain)
const avo = {atbt1: 'avô'}
const pai = {__proto__: avo, atbt2: 'Pai'}
const filho = {__proto__: pai, atbt3: 'Filho'}

filho.atbt1 = "avô2"
console.log(filho.atbt1, filho.atbt2)

console.log(avo)

//-------------------------------------------------

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velAtual){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 300 //shadowing, vai sobreescrever a prop. velMax de carro
}

const audi = {
    modelo: 'tt',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

console.clear()

Object.setPrototypeOf(ferrari, carro) //outra forma de adicionar um prototype(objeto, qual prototipo que sera seu pai)

Object.setPrototypeOf(audi, carro)

ferrari.acelerar(100)
console.log(ferrari.status())

audi.acelerar(300)
console.log(audi.status())