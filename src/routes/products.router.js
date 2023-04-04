const ProductManager = require ("./../../productManager")
const prodRouter = new ProductManager

const { Router } = require ('express')


const ProductRouter = Router()

module.exports = {
    ProductRouter
}

ProductRouter.get('/', async (req, res)=>{

        let ProductLimit = req.query.productLimit
        let info = await prodRouter.getProduct()
        console.log(ProductLimit)
        
    
    

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

ProductRouter.get('/', async (req, res)=>{
    let prodID = req.params.prodID
    let infos = await prodRouter.getProduct()
    console.log(prodID)
   


    



try {



if(prodID){
    

    let answer2 =  infos.find(teclado=>teclado.id==prodID);

    
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


})
    
