import mongoose from 'mongoose'
import collections from '../collections/collections.js'

const customersSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    age: String
})

const customersModel = mongoose.model(collections.customers,customersSchema)

export default customersModel