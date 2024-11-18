import { Types } from "mongoose"
import customersModel from "../models/customersModel.js"

const authen = {

    authentic : async (req, res, next) => {
        const { api_key } = req.query
        try {
            if(!api_key) throw new Error('Forbidden')
            const api_keyParse = api_key.split("$")[5]
                if(!Types.ObjectId.isValid(api_keyParse)) {
                    throw new Error('Forbidden')
                } else {
                    const id = api_key.split("$")[1]
                    const email = api_key.split("$")[3]
                    const customer = await customersModel.findById(api_keyParse)
                    if(customer.id !== id || customer.email !== email) throw new Error('Forbidden')
                }  
            next()
            
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            })
        }
    },

    authenGetApiKey: (req, res, next) => {
        const param  = req.params
        const { customerId } = param
        try {
            if(!customerId) {
                throw new Error('customer id is not found')
            }else {
                next()
            }
            
        } catch  (error) {
            res.status(403).send({
                message: error.message,
                apiKey: null,
                success: false
            })
        }
    },

    uniQueCustomer: async (req, res, next) => {
        const { name, email, age } = req.body
        const uniqueEmail = await customersModel.find({email: email})
        try {
            if(uniqueEmail.length) throw new Error('Email already exists')
            if(!uniqueEmail.length)
            next()
        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            })
        }
    },

    isExistOrderValue: async (req, res, next) => {
        const { customerId, productId, quantity } = req.body
        try {
            if( customerId && productId && quantity )
            next()
        } catch (error) {
            res.status(403).send({
                message: 'Forbiden',
                data: null,
                success: false
            })
        }
    },

    isOrderId: async (req, res, next) => {
        const orderId = req.params
        console.log(orderId)
        try {
            if(!orderId) throw new Error('orderId is not found')
            next()
        } catch (error) {
            res.status(404).send({
                message: error.message,
                data: null,
                success: false
            })
        }
    }
    
}

export default authen