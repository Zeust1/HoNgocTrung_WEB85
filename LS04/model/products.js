import mongoose from 'mongoose'
import collections from '../database/collection.js'


const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    quantity: Number
})


const ProductModel = mongoose.model(collections.PRODUCTS, productSchema)

export default ProductModel