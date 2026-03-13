const express = require ('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res) =>{
    res.send('¡Hola. Adios!')
})

app.listen(port, ()=>{
    console.log('La aplicación se esta ejecutando en el puerto '+port)
})