const ferrari = {
    modelo: 'F40',
    velMax: 300
}

const audi = {
    modelo: 'tt',
    velMax: 250
}

console.log(ferrari.__proto__ === Object.prototype)

function Verifica(obj){
    console.log(obj.__proto__ === Object.prototype)
}

const array = []

function abc(){}
Verifica(audi)
Verifica(abc.prototype)
Verifica(array)