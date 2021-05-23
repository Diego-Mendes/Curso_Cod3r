//CÁLCULO DE FUNÇÃO EXPONENCIAL

function Exponencial(base = 2, expoente=0){
    //atrivuto privado
    let resultado = 0;

    //método público
    this.resultado = function (){
        if(base > 0 || base != 1 ){
            resultado = base ** expoente;
        }else{resultado = "Valores inválidos"}
    }


    //método público
    this.Getresultado = function () {
        return resultado;
    }
}

//instanciando objetos:

obj1 = new Exponencial(5, 2)
obj1.resultado()
console.log(obj1.Getresultado())

obj2 = new Exponencial(2, 10)
obj2.resultado()
console.log(obj2.Getresultado())