const mongoose = require ("mongoose")

const prodCollection = "products"
const Schema = Schema

const productSchema = new Schema({
    title:String,
    description:String,
    price:Number,
    category:String,
    thumbnail:String,
    code:{
        type:Number,
        unique:true
    },

    stock:Number
})
 

module.exports = mongoose.model(prodCollection,productSchema)

