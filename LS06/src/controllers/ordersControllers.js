import ordersModel from "../models/ordersModel.js"
import productsModel from "../models/productsModel.js"
import { v4 as uniqueId } from 'uuid';

const ordersControllers = {
    getHighValue: async (req, res) => {
        const ouput = await ordersModel.find({totalPrice: {$gt: 10000000}})
        res.send(ouput)
    },

    createNewOrder: async (req, res) => {
        const { orderId, customerId, productId, quantity } = req.body
        try {
            const product = await productsModel.find({id: productId})
            if(!product[0]) throw new Error('productId is not found')
            if(product[0] && quantity <= product[0].quantity) {
                const newOrder = await ordersModel.create({
                    orderId: uniqueId(),
                    customerId,
                    productId,
                    quantity,
                    totalPrice: product[0].price * quantity,
                })
                await productsModel.updateOne({quantity : product[0].quantity - quantity})
                res.status(200).send({
                    message: 'new order is created',
                    data: newOrder,
                    success: true
                })
            }else {
                throw new Error('Quantity not guaranteed')
            }

        } catch (error) {
            res.status(403).send({
                message: error.message,
                data: null,
                success: false
            })
        }
    }
}

export default ordersControllers