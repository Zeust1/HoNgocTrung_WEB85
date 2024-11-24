import { Router } from "express";

import customersControllers from "../controllers/customersControllers.js";
import customersAuth from "../middleware/customersAuth.js";

const customersRoutes = Router()

customersRoutes.route('/login').post(customersAuth.checkLogin)
customersRoutes.route('/register').post(customersAuth.isValidData, customersAuth.uniqueEmail,customersControllers.register)
export default customersRoutes

