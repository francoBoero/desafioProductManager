
const prodmodel = require ("./models/prodModel")


class ProductDao {

getAll = async ()=>{
    try {
       const productDB = await prodmodel.find()
        return productDB
        
    } catch (error) {
        console.log("no se pudo traer los productos", error )
        
    }


}
getById = async(id)=>{
    try {
        const prodDbId = await prodmodel.findById({_id:id})
        return prodDbId
    } catch (error) {
        console.log("no se encontro este determinado producto", error)

        
    }
}
CreateProduct = async (product)=>{

    try {
        const  {title, description, price, category, thumbnail, code, stock} = product
        const newprodDbd = await prodmodel.create({title, description, price, category, thumbnail, code, stock})
        return newprodDbd
        
    } catch (error) {
        console.log("no se pudo crear el producto")
        
    }

}
DeleteProduct = async (id)=>{
    try {
        const deleteprod = await prodmodel.deleteOne({_id:id})
        console.log("se elimino correctamente este producto", deleteprod)
    } catch (error) {
        console.log("no se ha podido eliminar el producto")
        
    }


}
updateProduct = async (id,updateprod)=>{
    try {
        const {title, description, price, category, thumbnail, code, stock} = updateprod
        await prodmodel.updateOne({_id:id}, {$set:{title:title, description:description, price:price,category:category, thumbnail:thumbnail, code:code, stock:stock} })
        return console.log("el producto con el nombre " + title + " ha sido cambiado")

    } catch (error) {
        
        console.log("no se pudo hacer el update")
    }
}



}
module.exports = ProductDao