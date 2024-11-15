import mongoose from 'mongoose'
import collections from '../collections/collections.js'

const productsSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    quantity: Number
})

const productsModel = mongoose.model(collections.products,productsSchema)

export default productsModel