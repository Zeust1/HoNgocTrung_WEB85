import mongoose from 'mongoose'
import collections from '../database/collection.js'


const postSchema = new mongoose.Schema({
    postId: String,
    userId: String,
    postContent: String
})


const PostModel = mongoose.model(collections.POSTS, postSchema)

export default PostModel