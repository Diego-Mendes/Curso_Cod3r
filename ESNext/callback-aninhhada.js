const http = require('http') //requisição:

 const getTurma = (letra, callback) => {
     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

     http.get(url, res => {
        let resultado = ""
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))

        })
     })
 }

 let nomes = []


//callbacks aninhadas:
 getTurma('A', alunos => {
    alunos.map(valor => {
         nomes.push(valor.nome)
    })

    getTurma('B', alunos => {
        alunos.map(valor => {
             nomes.push(valor.nome)
        })
    
        getTurma('C', alunos => {
            alunos.map(valor => {
                 nomes.push(valor.nome)
            })
        
            console.log(nomes)
            
         })
     })

 })