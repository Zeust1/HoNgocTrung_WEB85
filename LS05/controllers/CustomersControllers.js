import CustomersModel from '../models/customersModel.js'

const CustomersControllers = {

    getCustomers : async (req, res) => {
        res.send(await CustomersModel.find())
    },
    test : (req, res) => {
        res.send('hello')
    }
}

export default CustomersControllers