import customersModel from "../models/customersModel.js"

const authenControllers = {
    getApiKeyById: async( req, res , next) => {
        const param = req.params
        const { customerId } = param
        const customer = await customersModel.find({id : customerId})
        
            try {
                const {id , email, _id} = customer[0]
                res.status(200).send({
                    message: 'get Api key is succesfully',
                    apiKey: `web-$${id}$-$${email}$-$${_id}$`,
                    success: true
                })
            next()
            } catch (error) {
                res.status(403).send({
                    message: error.message,
                    apiKey: null,
                    success: false
                })
            }
    }
}

export default authenControllers