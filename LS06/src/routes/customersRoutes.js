import { Router } from "express";
import customersControllers from "../controllers/customersControllers.js";
import authen from "../middleware/authen.js";


const customersRoutes = Router()
customersRoutes.route('/:id').get(customersControllers.getCustomerById)
customersRoutes.route('/:customerId/orders').get(customersControllers.getOrderById)
customersRoutes.route('/').get(customersControllers.getAllCustomers).post(authen.uniQueCustomer,customersControllers.createNewCustomer)



export default customersRoutes