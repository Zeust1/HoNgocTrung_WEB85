import customersModel from "../models/customersModel.js"
import bcrypt from 'bcrypt'

const customersAuth = {

    isValidData: async (req, res, next) => {
        const { name, email, age, password } = req.body
            try {
                if(!name || !email || !age || !password) throw new Error('Missing necessary information')
                next()
            } catch (error) {
                res.status(403).send({
                    message: error.message
                })
            }
    },

    uniqueEmail: async (req, res, next) => {
        const { email } = req.body
            try {
                const isValidEmail = await customersModel.findOne({email})
                if(isValidEmail) throw new Error('Email is available')
                next()
            } catch (error) {
                res.status(403).send({
                    message: error.message
                })
            }
    },

    checkLogin: async (req, res, next) => {
        const { email, password } = req.body
        try {
            const checkEmail = await customersModel.findOne({email})
            if(!checkEmail) throw new Error('Email or password is wrong')
            const checkSalt = checkEmail.salt
            const currentHash = bcrypt.hashSync(password, checkSalt)
            if(currentHash !== checkEmail.hash) throw new Error('Email or password is wrong')
            res.status(200).send({
                message: 'Succesful',
                apiKey: `web-$${checkEmail.id}$-$${email}-$${checkSalt}$`
            })
            next()
        } catch (error) {
            res.status(403).send({
                message: error.message,
                apiKey: null
            })
        }
    }
}

export default customersAuth