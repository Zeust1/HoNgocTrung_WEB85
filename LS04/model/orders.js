import mongoose from 'mongoose'
import collections from '../database/collection.js'


const orderSchema = new mongoose.Schema({
    orderId: String,
    customerId: String,
    productId: String,
    quantity: Number,
    totalPrice: Number
})


const OrderModel = mongoose.model(collections.ORDERS, orderSchema)

export default OrderModel