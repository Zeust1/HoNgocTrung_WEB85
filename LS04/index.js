import express from 'express'
import mongoose from 'mongoose'
import UserModel from './model/users.js'
import PostModel from './model/posts.js'
import CommentModel from './model/comments.js'

mongoose.connect('mongodb+srv://admin:password%40123@cluster0.pwg8a.mongodb.net/WEB85')

const app = express()
app.use(express.json())

app.post('/api/v1/users', async (req, res) => {
    try {
        const {userName, email} = req.body
        if(!userName) throw new Error('User name is required')
        if(!email) throw new Error('Email is required')

        const createdUser = await UserModel.create({
            userName,
            email
        })

        res.status(201).send({
            message: 'Register successfully',
            data: createdUser,
            success: true
        })

        
    } catch (error) {
        res.status(403).send({
            message: error.message,
            data: null,
            success: false
        })
    }
})

app.listen(8080, ()=> console.log('server is running'))