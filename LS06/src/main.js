import express from 'express'
import mongoose from 'mongoose'

// db
mongoose.connect('mongodb+srv://WEB85_LS04_ADMIN:WEB85_LS04_PASSWORD@cluster0.5spih.mongodb.net/WEB85')

// routes
import customersRoutes from './routes/customersRoutes.js'

// middleware_authenic
import authen from './middleware/authen.js'


const app = express()
app.use(express.json())





app.use('/api/v1/customers', authen.authenCustomers,customersRoutes)

app.listen(8080, () => console.log('server is running'))