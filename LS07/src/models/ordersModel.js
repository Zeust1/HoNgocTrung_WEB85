import mongoose from 'mongoose'
import collections from '../collections/collections.js'

const ordersSchema = new mongoose.Schema({
    orderId: String,
    customerId: String,
    productId: String,
    quantity: Number,
    totalPrice: Number
})

const ordersModel = mongoose.model(collections.orders,ordersSchema)

export default ordersModel