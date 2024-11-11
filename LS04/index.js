import express from 'express'
import mongoose from 'mongoose'
import CustomerModel from './model/customers.js'
import ProductModel from './model/products.js'
import OrderModel from './model/orders.js'

mongoose.connect('mongodb+srv://WEB85_LS04_ADMIN:WEB85_LS04_PASSWORD@cluster0.5spih.mongodb.net/WEB85')

const app = express()
app.use(express.json())

// them customer moi 
// cau 6
app.post('/api/v1/customers', async (req, res) => {
    try {
        const {id, name, email, age} = req.body
        if(!id) throw new Error("id is required");
        if(!name) throw new Error("name is required");
        if(!email) throw new Error("email is required");
        if(!age) throw new Error("age is required");
        
        const newCustomer = await CustomerModel.create({
            id,
            name,
            email,
            age
        })

        res.status(201).send({
            message: 'New customer is created',
            data: newCustomer,
            success: true
        })

    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        })
    }
})

// them product moi
app.post('/api/v1/products', async (req, res) => {
    try {
        const {id, name, price, quantity} = req.body
        if(!id) throw new Error("id is required");
        if(!name) throw new Error("name is required");
        if(!price) throw new Error("email is required");
        if(!quantity) throw new Error("age is required");
        
        const newProduct = await ProductModel.create({
            id,
            name,
            price,
            quantity
        })

        res.status(201).send({
            message: 'New product is created',
            data: newProduct,
            success: true
        })

    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        })
    }
})

// // them order moi
// app.post('/api/v1/orders', async (req, res) => {
//     try {
//         const {orderId, customerId, productId, quantity, totalPrice} = req.body
//         if(!orderId) throw new Error("orderId is required");
//         if(!customerId) throw new Error("customerId is required");
//         if(!productId) throw new Error("productId is required");
//         if(!quantity) throw new Error("quantity is required");
//         if(!totalPrice) throw new Error("totalPrice is required");

        
//         const newOrder = await OrderModel.create({
//             orderId,
//             customerId,
//             productId,
//             quantity,
//             totalPrice
//         })

//         res.status(201).send({
//             message: 'New order is created',
//             data: newOrder,
//             success: true
//         })

//     } catch (error) {
//         res.status(403).send({
//             message: error.message,
//             data: null,
//             success: false
//         })
//     }
// })


// cau 1
app.get('/api/v1/customers', async (req, res) => {
    const findItem = await CustomerModel.find({})
    res.send(findItem)
})

// cau 2
app.get('/api/v1/customers/:customerId', async (req, res) => {
    const { customerId } = req.params
    const findItem = await CustomerModel.findOne({id : customerId})
    res.send(findItem)
})

// cau 3
app.get('/api/v1/customers/:customerId/orders', async (req, res) => {
    const { customerId } = req.params
    const findItem = await OrderModel.findOne({customerId : customerId})
    res.send(findItem)
})

// cau 4
app.get('/api/v1/orders/highvalue', async (req, res) => {
    const findItem = await OrderModel.find({totalPrice : {$gt: 10000000}})
    res.send(findItem)
})

// cau 5
app.get('/api/v1/products', async (req, res) => {
    const queryParams = req.query
    const {minPrice, maxPrice} = queryParams
    try {
        if(!minPrice) throw new Error('minPrice not found')
        if(!maxPrice) throw new Error('maxPrice not found')
         
        const findItem = await ProductModel.find({price : {$gte : minPrice, $lte : maxPrice}})

        res.status(200).send({
            message: 'get data is success',
            data: findItem,
            success: true
        })
            
    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        })
    }
})

// cau 7
app.post('/api/v1/orders', async (req, res) => {
    const {orderId, customerId, productId, quantity, totalPrice} = req.body


    try {
        const product = await ProductModel.find({id: productId})
        if(quantity > product[0].quantity) throw new Error('invalid quantity')
            
        const newOrder = await OrderModel.create({
            orderId,
            customerId,
            productId,
            quantity,
            totalPrice : product[0].price * quantity
        })
        res.status(200).send({
            message: 'new order is created',
            data: newOrder,
            success: true
        })
        
        await ProductModel.findOneAndUpdate({id : productId}, {quantity : product[0].quantity - quantity})
    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        })
    }
})


// cau 8
app.put('/api/v1/orders/:orderId', async (req, res) => {
    const { orderId } = req.params
    const { quantity } = req.body
    try {
        const findItem = await OrderModel.find({orderId : orderId})
        if(!findItem) throw new Error('orderId is not found')
        const updatedOrder = await OrderModel.findOneAndUpdate({orderId : orderId},{totalPrice: (findItem[0].totalPrice/findItem[0].quantity)},{quantity : quantity})
        res.status(200).send({
            message: 'updated order',
            data: findItem,
            success: true
        })
    } catch (error) {
        res.status(404).send({
            message: error.message,
            data: null,
            success: false
        })
    }
})
app.listen(8080, () => console.log('server is running'))