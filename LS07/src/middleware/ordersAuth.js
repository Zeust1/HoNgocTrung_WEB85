import customersModel from "../models/customersModel.js"
import ordersModel from "../models/ordersModel.js"

const ordersAuth = {
    isLogin: async (req, res, next) => {
        const id = req.params
        const { api_key } = req.query
        if(api_key) {
            const parseApiKey = api_key.split("-$")[3]
            const getSalt = parseApiKey.split("")
            const deleteLastChar = getSalt.pop()
            const salt = getSalt.join("")
            try {
                if(!parseApiKey) throw new Error('User not login')
                const isValidUser = await customersModel.findOne({id: id.id, salt: salt})
                console.log(salt)
                if(!isValidUser) throw new Error('User not valid')
                next() 
            } catch (error) {
                res.status(403).send({
                    message: error.message
                })
            }
        }else{
            res.status(403).send({
                message: 'User not valid'
            })
        }
    },

    isValid: async ( req, res, next) => {
        const {  productId, quantity } = req.body
        const { api_key } = req.query
        try {
            if(!api_key) throw new Error('Forbiden')
            if(!productId || !quantity) throw new Error('Missing necessary information')
            next()
        } catch (error) {
            res.status(403).send({
                message: error.message
            })
        }
    }
}

export default ordersAuth