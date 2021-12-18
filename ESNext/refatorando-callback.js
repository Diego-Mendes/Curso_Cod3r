const http = require('http') //requisição:

 const getTurma = letra => {
     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        
     http.get(url, res => {
        let resultado = ""
        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            try{
                resolve(JSON.parse(resultado))
            }   catch(e){
                reject(e)
            }

        })
     })
    })
 }

//  let nomes = []


// //callbacks aninhadas:
//  getTurma('A').then(alunos => {
//     alunos.map(valor => {
//          nomes.push(valor.nome)
//     })

//     getTurma('B').then(alunos => {
//         alunos.map(valor => {
//              nomes.push(valor.nome)
//         })
    
//         getTurma('C').then(alunos => {
//             alunos.map(valor => {
//                  nomes.push(valor.nome)
//             })
        
//             console.log(nomes)
            
//          })
//      })

//  })

//refatorando...
let erro = "Turma inexistente!"
 Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    // .then(x => console.log(x))

    getTurma('D').catch(e => console.log(erro))