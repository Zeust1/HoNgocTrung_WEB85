import { Router } from "express";
import customersControllers from "../controllers/customersControllers.js";
import authen from "../middleware/authen.js";


const customersRoutes = Router()
customersRoutes.route('/:id').get( authen.authentic,customersControllers.getCustomerById)
customersRoutes.route('/:customerId/orders').get(authen.authentic ,customersControllers.getOrderById)
customersRoutes.route('/').get(authen.authentic ,customersControllers.getAllCustomers).post(authen.authentic ,authen.uniQueCustomer,customersControllers.createNewCustomer)



export default customersRoutes