import express from 'express'
import mongoose from 'mongoose'


import customersModel from './models/customersModel.js'
import { env } from './configs/environment.js'

const app = express()
mongoose.connect(env.DB_URL)

app.use(`${env.BASE_API}/customers`, async (req, res) =>{
    res.send( await customersModel.find())
})

app.listen(env.PORT, () => console.log(`server is running on port ${env.PORT}`))