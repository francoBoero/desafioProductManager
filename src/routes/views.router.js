const { Router } = require ('express')
const Viewsrouter = Router()
const ProductManager = require('../../productManager')
const producer = new ProductManager ("./products.json")

Viewsrouter.get('/', async (req, res)=>{
    let viewprods =   await producer.getProduct()
   
    console.log(viewprods)
    

   

     res.render('home.handlebars',{viewprods})
})
module.exports = {Viewsrouter}