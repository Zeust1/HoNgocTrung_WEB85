import customersModel from "../models/customersModel.js"
import ordersModel from "../models/ordersModel.js"

const customersControllers = {

    getAllCustomers : async ( req, res) => {
        res.send(await customersModel.find())
    },

    getCustomerById: async (req, res) => {
        const  id  = req.params
        const customer = await customersModel.find({id : id})
        try {
            if(!customer[0]) throw new Error('customer id is not found')
            res.send(customer[0])
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            })
        }
    },

    getOrderById: async (req, res) => {
        const customerId = req.params
        const order = await ordersModel.find(customerId)
        try {
            if(!order[0]) throw new Error('customer id is not found')
            res.send(order)
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            })
        }
    },

    createNewCustomer: async (req, res) => {
        const { name, email, age } = req.body
        const newCustomer = await customersModel.create({
            name,
            email,
            age
        })
        try {
            res.status(200).send({
                message: 'new customer is created',
                data: newCustomer,
                success: true
            })
        } catch (error) {
            res.status(403).send({
                message: 'Forbiden',
                data: null,
                success: false
            })
        }
    }

}

export default customersControllers