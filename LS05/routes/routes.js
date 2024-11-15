import CustomersControllers from "../controllers/CustomersControllers.js";
import express from 'express'

const Router = express.Router()



Router.route('/a').get(CustomersControllers.getCustomers)
Router.route('/').get(CustomersControllers.test)



export default Router