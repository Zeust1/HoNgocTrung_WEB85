import { Router } from "express";
import authenControllers from "../controllers/authenControllers.js";
import authen from "../middleware/authen.js";

const getApiKey = Router()

getApiKey.route('/:customerId').get(authen.authenGetApiKey,authenControllers.getApiKeyById)
getApiKey.route('/').get(authen.authenGetApiKey)





export default getApiKey