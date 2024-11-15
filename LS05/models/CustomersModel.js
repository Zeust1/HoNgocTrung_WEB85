import mongoose from 'mongoose'
import collections from '../collections/collections.js'

const customersSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    age: String
})

const CustomersModel = mongoose.model(collections.customers,customersSchema)

export default CustomersModel