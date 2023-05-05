const ProductManager = require ("../../productManager.js")
const productsR = new ProductManager ("./products.json")

/*const mostrador = async ()=> {
  const mostrame = await productsR.getProduct()
  console.log(mostrame)
}
mostrador()*/

const { Router } = require ('express')


const ProductRouter = Router()



ProductRouter.get("/", async (req, res) => {
  try {
    let showproduct = await productsR.getProduct();
    let ProductLimit = req.query.productLimit;

    if (ProductLimit) {
        console.log(ProductLimit)
      let answer = showproduct.splice(0, ProductLimit);

      console.log(answer);
      res.status(200).send(answer);
    }else{
        res.status(200).send(showproduct)
        console.log(showproduct)


    }
  } catch (error) {}
});
ProductRouter.get("/:ProdId", async (req, res) => {
  
    
    try {
      let info = await productsR.getProduct();
  
      let ProdId = req.params.ProdId;
    if (ProdId) {
      let answer2 = info.find((teclado) => teclado.id == ProdId);

      console.log(answer2);
      res.send(answer2);
     

    
      
      
    } else{
        console.log("no se puede encontrar este objeto");
        res.status(404).send("no se puede encontrar este objeto")
    }
  } catch (error) {
    console.log(info);
  }
});


ProductRouter.post('/', async(req,res)=>{
  console.log("entre al post")
    let {title, description, price, thumbnail, code, stock, id} = req.body
    productsR.addProduct(req.body)
    

    res.status(200).send("argegado exitosamente  " + title, description, price, thumbnail, code, stock, id)

})


ProductRouter.put('/:ProdId', async(req,res)=>{
  try {
    let info = await productsR.getProduct();
    const {title, description, price, thumbnail, code, stock,} = req.body
    let ProdId = req.params.ProdId;

  if (ProdId) {
    let answer2 = info.findIndex((teclado) => teclado.id == ProdId);
    info[answer2] = {id:ProdId, title, description, price, thumbnail, code, stock}


   
    res.status(200).json({
      status: 'succes',
      payload : info
    })
    console.log(info);
   

  
    
    
  } else{
      console.log("no se puede encontrar este objeto");
      res.status(404).send("no se puede encontrar este objeto")
  }
} catch (error) {
  console.log(error);
}
})

ProductRouter.delete('/:ProdId', async(req,res)=>{
  try {
    let info = await productsR.getProduct();
    let ProdId = req.params.ProdId;


  if (ProdId) {
    let answer2 = info.findIndex((teclado) => teclado.id == ProdId);
    info.splice(answer2, 1)


   
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


module.exports = {ProductRouter}