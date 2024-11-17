import { Router } from "express";
import ordersControllers from "../controllers/ordersControllers.js";
import authen from "../middleware/authen.js";


const ordersRoutes = Router()
ordersRoutes.route('/highvalue').get(ordersControllers.getHighValue)
ordersRoutes.route('/').post(authen.isExistOrderValue,ordersControllers.createNewOrder)



export default ordersRoutes