import customersModel from "../models/customersModel.js"
import { v4 as uniqueId } from 'uuid'
import bcrypt from 'bcrypt'

const customersControllers = {

    register: async (req, res) => {
        const { name, email, age, password } = req.body
        const saltRounds = 12
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        const newCustomer = await customersModel.create({
            id: uniqueId(),
            name,
            email,
            age,
            salt,
            hash
        })
        res.status(201).send({
            data: newCustomer
        })
    }
}

export default customersControllers