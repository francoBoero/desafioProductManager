const {Router} = require ('express')
const fs = require ("fs")
const Rtp = Router()
const ProductManager = require ("../../productManager.js")
const realTimeP = new ProductManager ("./products.json")


Rtp.get('/', async (req, res)=>{
    let SrealTimeP = await realTimeP.getProduct()
    res.render('realTimeProd.handlebars', {SrealTimeP})


})
Rtp.delete('/:ProdId', async(req,res)=>{
    try {
        console.log("funca el delete")
      let info = await realTimeP.getProduct();
      let ProdId = req.params.ProdId;
  
  
    if (ProdId) {
      let answer2 = info.findIndex((teclado) => teclado.id == ProdId);
      info.splice(answer2, 1)
      await fs.promises.writeFile(
        "./products.json",
        JSON.stringify(info, null, "\t")
      );

  
  
     
      res.status(200).json({
        status: 'succes',
        payload : info
      })
      console.log(info);
     
  
    
      
      
    } 
   
    else{
        console.log("no se puede encontrar este objeto");
        res.status(404).send("no se puede encontrar este objeto")
    }
  } catch (error) {
    console.log(error);
  }
  })
  
module.exports = {Rtp}