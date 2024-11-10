import express, { query } from 'express'
import { v4 as uniqueId } from 'uuid';

import  data  from './data.js'
const { customers, products, orders } = data

const app = express()
app.use(express.json()); 

// cau 1
// app.get('',(req, res) => {
//     res.send(customers)
// })


// cau 2
// app.get('/customers/:id',(req, res) => {
//     const  { id }  = req.params
//     const customer = customers.find((value)=> value.id === id)
//     res.send(customer)
// })


// cau 3
// app.get('/customers/:customerId/orders',(req, res) => {
//     const  { customerId }  = req.params
//     const order = orders.find((value)=> value.customerId === customerId)
//     res.send(order)
// })


// cau 4
// app.get('/orders/highvalue',(req, res) => {
//     const highValue = orders.filter(total => total.totalPrice > 10000000)
//     res.send(highValue)
// })


// cau 5
// app.get('/products',(req, res) => {
//     const queryParams = req.query
//     const { minPrice, maxPrice } = queryParams
//     if(minPrice && maxPrice){
//         const fillProducts = products.filter(product => (product.price >= minPrice && product.price <= maxPrice))
//         res.send(fillProducts)
//         return
//     }
//     if(!minPrice || !maxPrice){
//         res.send(products)
//         return
//     }
// })


// cau 6
// app.post('/customers',(req, res) => {
//     const body = req.body
//     const { email } = body
//     if(!customers.find(customer => customer.email === email)){
//         body.id = uniqueId()
//         customers.push(body)
//         res.send(customers)
//         return
//     }else{
//         console.log('email already exists')
//         return
//     }
// })


// cau 7
app.post('/orders',(req, res) => {
    const body = req.body
    const { productId, quantity } = body
    products.forEach((product) => {
        if(product.id === productId && product.quantity >= quantity){
            body.orderId = uniqueId()
            orders.push(body)
            res.send(orders)
            return
        }else{
            console.log('product sold out')
        }
    }
    )
})

app.listen(8080, () => console.log('server is running'))

