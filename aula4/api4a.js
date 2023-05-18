const express = require('express')
const app = express()
const porta=process.env.PORT

app.get('/',(req,res)=>{
    res.send('Welcome to the jungle')
})
app.get('/canal',(req,res)=>{
    res.json({canal:'CFB Cursos'})
})

app.listen(porta || 3000,console.log('sever OK'))