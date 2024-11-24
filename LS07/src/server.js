import express from 'express'
import mongoose from 'mongoose'

import { env } from './configs/environment.js'
import customersRoutes from './routes/customersRoutes.js'
import ordersRoutes from './routes/ordersRoutes.js'

const app = express()
app.use(express.json())
mongoose.connect(env.DB_URL)

app.use(`${env.BASE_API}`, customersRoutes)
app.use(`${env.BASE_API}`, ordersRoutes)



app.listen(env.PORT, () => console.log(`server is running on port ${env.PORT}`))