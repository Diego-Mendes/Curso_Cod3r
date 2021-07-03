const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Parabéns')
})



app.post('/usuarios/3', (req, res) => {
   const id = req.params.id
    console.log(req.body)
    console.log(id)
    res.send(id)
})

app.listen(3003)