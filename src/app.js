
//const  query  = require("express")
const express = require ("express")
//const ProductManager = require ("../productManager")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const { ProductRouter } = require ('./routes/products.router')
const { Cprods } = require ('./routes/cart.router')

const PORT = 8080
//const prod = new ProductManager


app.use('/api/products', ProductRouter)
app.use('/api/cart', Cprods)


app.listen (PORT, () =>{
    console.log('server abierto en el puerto' + PORT)
})  




















/*app.get('/productos', async (req, res) =>{
        let ProductLimit = req.query.ProductLimit
        let info = await prod.getProduct()
        
    
    

        try {
        
        if(ProductLimit){
            let  answer =  info.splice(0, ProductLimit);
            
            console.log(answer)
            res.status(200).send(answer)

        }
        else{
            console.log(info)
            res.status(200).send(info)

        }

        
    } catch (error) {
        console.log(error
            )
    }


})


app.get('/productosByid/:productid', async (req, res) =>{
        let productid = req.params.productid
        let infos = await prod.getProduct()
       


        



    try {

    
    
    if(productid){
        
    
        let answer2 =  infos.find(teclado=>teclado.id==productid);

        
        console.log(answer2)
        res.send(answer2)

    }
    else{
        console.log('Producto no existente')
        res.send('producto no existente')


    }

    
} catch (error) {
    console.log(error)
}


})*/