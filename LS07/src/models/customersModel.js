import mongoose from 'mongoose'
import collections from '../collections/collections.js'
import { hash } from 'bcrypt'

const customersSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    age: String,
    salt: String,
    hash: String
})

const customersModel = mongoose.model(collections.customers,customersSchema)

export default customersModel