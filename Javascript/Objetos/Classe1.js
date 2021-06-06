class Lancamento{
    constructor(nome = 'Indefinido', valor = 0){
        this.nome = nome;
        this.valor = valor 
    }
}

class CicloFinaceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    //Métodos:

    SetLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valor = 0
        this.lancamentos.forEach(l => {valor+=l.valor})
        return valor
    }
}

const salario = new Lancamento('doralis', 15000)
const contaDeLuz = new Lancamento('luz', -1000)
const contas = new CicloFinaceiro(10, 2020)
    contas.SetLancamentos(salario, contaDeLuz)
    console.log(contas.sumario())