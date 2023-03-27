
const express = require ("express")
const ProductManager = require ("./productManager")
const app = express()
app.use(express.urlencoded({ extended : true }))
app.use(express.json)

const PORT = 8080

app.listen (8080, () =>{
    console.log('server abierto en el puerto' + PORT)
})  

app.get('/productos', (req, res) =>{
    
  
    try {
        console.log(req.query)

        res.status(200).send(console.log('funciono correctamente'))
    } catch (error) {
        console.log(error
            )
    }
   

})