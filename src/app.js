
//const  query  = require("express")
const express = require ("express")
const ProductManager = require ("../productManager")
const app = express()
const appprod = new ProductManager ('./products.json')

const { ProductRouter } = require ('./routes/products.router')
const { Cprods } = require ('./routes/cart.router')
const {Server} = require ('socket.io')
const {Viewsrouter} = require ('./routes/views.router')
const {Rtp} = require ('./routes/realtimeprod')

//config de handlebars
const handlebars = require('express-handlebars')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/static", express.static(__dirname+"/public"))
app.engine('handlebars', handlebars.engine())
app.set('views', __dirname+'/views')
app.set('view engine', 'handlebars')
//config de handlebars

const PORT =  8080
//const prod = new ProductManager

app.use('/realTimeProducts', Rtp)
app.use('/api/products', ProductRouter)
app.use('/api/cart', Cprods)

app.use('/view/homehandlebars', Viewsrouter)


const httpserver = app.listen (PORT, () =>{
    console.log('server abierto en el puerto' + PORT)
})  
let allprds = async()=>{
    const allprd = await appprod.getProduct()
    return allprd
} 

let logs = async (dataprd)=>{
    await appprod.addProduct(dataprd)
    return "se agrego correctamente"
    
}
const socketServer = new Server(httpserver)



socketServer.on('connection',async socket=>{
    console.log("nuevo cliente conectado")
    let prdArray = await appprod.getProduct()
    socketServer.emit("form", {prdArray})


    socket.on("newprd",async dataprd=>{
    
        logs(dataprd)
        prdArray = await appprod.getProduct()
       
        socketServer.emit("form", {prdArray})
     })
     socket.on("delete", async dprd=>{
        console.log("delete backend") 
        prdArray = await appprod.getProduct()
        socketServer.emit("form", {prdArray} )
     })

})



console.log(__dirname)











