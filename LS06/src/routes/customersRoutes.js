import { Router } from "express";
import customersControllers from "../controllers/customersControllers.js";

const customersRoutes = Router()

customersRoutes.route('/').get(customersControllers.getAllCustomers)

export default customersRoutes