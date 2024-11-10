import mongoose from 'mongoose'
import collections from '../database/collection.js'


const userSchema = new mongoose.Schema({
    userName: String,
    email: String
})


const UserModel = mongoose.model(collections.USERS, userSchema)

export default UserModel