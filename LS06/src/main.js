import express from 'express'
import mongoose from 'mongoose'

// db
mongoose.connect('mongodb+srv://WEB85_LS04_ADMIN:WEB85_LS04_PASSWORD@cluster0.5spih.mongodb.net/WEB85')

// routes
import getApiKey from './routes/getApiKey.js'
import customersRoutes from './routes/customersRoutes.js'
import ordersRoutes from './routes/ordersRoutes.js'
import productsRoutes from './routes/productsRoutes.js'

// middleware
import authen from './middleware/authen.js'


const app = express()
app.use(express.json())

// api
app.use('/api/v1/customers/getApiKey/',getApiKey)

app.use('/api/v1/customers',authen.authentic,customersRoutes)

app.use('/api/v1/orders',authen.authentic,ordersRoutes)

app.use('/api/v1/products',authen.authentic,productsRoutes)


app.listen(8080, () => console.log('server is running'))