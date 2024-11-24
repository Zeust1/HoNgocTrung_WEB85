import { Router } from "express";
import ordersControllers from "../controllers/ordersControllers.js";
import ordersAuth from "../middleware/ordersAuth.js";

const ordersRoutes = Router()

ordersRoutes.route('/users/:id/orders').get(ordersAuth.isLogin, ordersControllers.getOrderById)
ordersRoutes.route('/orders/:id').put(ordersAuth.isLogin, ordersAuth.isValid, ordersControllers.updateOrderById).delete(ordersAuth.isLogin, ordersControllers.deleteOrder)
ordersRoutes.route('/orders').post(ordersAuth.isLogin, ordersAuth.isValid, ordersControllers.newOrder)
export default ordersRoutes