const ProductManager = require("../../productManager.js")
const cartprod = new ProductManager ("./products.json")
const FileSystem = require("fs")
const { Router } = require ('express')
const Cprods = Router()
const CartManager = require('../../cartManager')
const Carrito = new CartManager ("./cart.json")

    

Cprods.post("/", async (req, res)=>{
    const venicarrito = await Carrito.addCarrito()
    
    res.status(200).send("se creo carrito" + venicarrito)
    

    
})

Cprods.get("/:cid", async (req, res)=>{
    let minicartid = await Carrito.getCarritosbyid(req.params.cid)
    console.log(minicartid)
    let {id, product } = minicartid
    res.status(200).send(`aca esta el carrito compa ${id,product}, `  )


})
Cprods.post("/:cid/product/:pid", async(req,res)=>{
    let {cid, pid} = req.params
   await Carrito.addprodtocart(cid, pid)
    
    
        res.status(200).send("se agrego correctamente")
    
       

    

})


module.exports = {Cprods}