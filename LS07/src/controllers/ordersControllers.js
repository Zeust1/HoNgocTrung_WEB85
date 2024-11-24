import customersModel from '../models/customersModel.js'
import ordersModel from '../models/ordersModel.js'
import { v4 as uniqueId } from 'uuid'


const ordersControllers = {

    getOrderById: async (req, res) => {
        const id = req.params
        try {
            const order = await ordersModel.find({customerId: id.id})
            if(!order.length) throw new Error('id is not found')
            res.status(200).send({
                message: 'Successfully',
                data: order
            })
        } catch (error) {    
            res.status(200).send({
                message: error.message,
                data: null
            })
        }
    },
    newOrder: async (req, res) => {
        const {  productId, quantity } = req.body
        const { api_key } = req.query
        try {
            const parseapiKey = api_key.split("-$")[3]
            const getSalt = parseapiKey.split("")
            const deleteLastChar = getSalt.pop()
            const salt = getSalt.join("")
            const customer = await customersModel.findOne({salt})
            if(!customer) throw new Error('user not valid')
            const newOrder = await ordersModel.create({
                orderId: uniqueId(),
                customerId: customer.id,
                productId,
                quantity
            })
            res.status(200).send({
                message: 'Successfully',
                data: newOrder
            })
        } catch (error) {
            res.status(404).send({
                message: error.message,
                data: null
            })
        }

    },
    updateOrderById: async (req, res) => {
        const {  orderId, productId, quantity } = req.body
        try {
            const updateOrder = await ordersModel.findOneAndUpdate({orderId},{quantity: quantity, productId: productId})
            if(!updateOrder) throw new Error('order is not found')
            res.status(200).send({
                message: 'Successfully',
                data: updateOrder
            })
        } catch (error) {
            res.status(404).send({
                message: error.message,
                data: null
            })
        }
    },
    deleteOrder: async (req, res) => {
        const id = req.params
            const deletedOrder = await ordersModel.find({id})
            res.status(200).send({
                message: 'order is deleted',
                data: deletedOrder
            })
    }
}

export default ordersControllers