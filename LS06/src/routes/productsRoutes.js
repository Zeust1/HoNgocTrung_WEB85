import { Router } from "express";
import productsControllers from "../controllers/productsControllers.js";


const productsRoutes = Router()
productsRoutes.route('/').get(productsControllers.filter)




export default productsRoutes