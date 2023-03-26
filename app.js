
import express  from 'express';
import ProductManager  from './ProductManager.js'

app.use(express.json)
app.use(express.urlencoded({ extended : true }))
const PORT = 8080

const http = require ('http') 
http.createServer((peticion, respuesta)=>{
    console.log('servidor iniciado en el puerto' + PORT)

})

const app = express()

app.get('/productos/query', (req, res) =>{
    console.log(req.query)

    res.send('query')

})