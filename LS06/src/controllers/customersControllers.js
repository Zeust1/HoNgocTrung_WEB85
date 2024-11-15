import customersModel from "../models/customersModel.js"

const customersControllers = {
    getAllCustomers : async ( req, res) => {
        res.send(await customersModel.find())
    }
}

export default customersControllers