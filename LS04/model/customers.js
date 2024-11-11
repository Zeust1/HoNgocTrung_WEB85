import mongoose from 'mongoose'
import collections from '../database/collection.js'


const customerSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    age: String
})


const CustomerModel = mongoose.model(collections.CUSTOMERS, customerSchema)

export default CustomerModel