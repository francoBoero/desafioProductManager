const cartmodel = require('./models/CartModel')
const proddao = require("./models/prodModel")


class CartDao {

    addCart = async ()=>{
        try {
            const createCart = await cartmodel.create({})
            return createCart

            
        } catch (error) {
            console.log("no se ha podido crear el carrito")
            
        }
    }
    getCart = async ()=>{
        try {
            const getCart = cartmodel.find() 
            return getCart
            
        } catch (error) {
            console.log("ha habido un error")
            
        }
    }
    getCartyById = async (id)=>{
        try {
            const getCartById = cartmodel.find({_id:id}) 
            return getCartById 
            
        } catch (error) {
            console.log("ha habido un error")
            
        }
    }
    AddprodDb = async (cid, id)=>{
        try { const prodtocart = await proddao.findById({_id:id})
        
        if(cart && prodtocart){
            await cartmodel.updateOne({_id:cid}, {$set:{product:[...{id:id, quantity:1}]}})
        }
        else(
            console.log('falto una propiedad')
        )

        
            
            
        } catch (error) {
            console.log("no se encontro ningun producto con este id", error)        }

    }

}

