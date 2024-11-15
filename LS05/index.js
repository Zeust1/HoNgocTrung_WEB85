import express from 'express'
import mongoose from 'mongoose'
import Router from './routes/routes.js'



// controllers
import CustomersControllers from './controllers/CustomersControllers.js'

mongoose.connect('mongodb+srv://WEB85_LS04_ADMIN:WEB85_LS04_PASSWORD@cluster0.5spih.mongodb.net/WEB85')

const app = express()
app.use(express.json())

app.use('/api/v1/customers', Router)

app.listen(8080, () => console.log('server is running'))