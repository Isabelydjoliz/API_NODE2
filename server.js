import express from 'express'

const app = express()

app.use(express.json())

const usuarios = []

//criar as rotas
app.post('/cadastro', (req,res)=>{                 
    //console.log(req.body)
    usuarios.push(req.body)
    //res.send('DEU BOM NO POST!')
    res.status(201).json(req.body)
})

app.get('/cadastro',(req,res)=>{
    //res.send('DEU BOM NO GET!')
    res.status(200).json(usuarios)

})

//configurar porta do servidor 
app.listen(3000, ()=>{console.log('SERVIDOR RODANDO!')})