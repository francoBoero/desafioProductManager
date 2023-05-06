const  mongoose  = require("mongoose");

const cartCollection = "cart"
const Schema = mongoose.Schema

const cartSchema = new Schema({
    product:[
        {
            id:mongoose.Types.ObjectId,
            quantity:Number

        }
    ]
})

module.exports = mongoose.model(cartCollection, cartSchema)