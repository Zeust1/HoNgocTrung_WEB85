import mongoose from 'mongoose'
import collections from '../database/collection.js'


const commentSchema = new mongoose.Schema({
    commenId: String,
    userId: String,
    commentContent: String
})


const CommentModel = mongoose.model(collections.COMMENTS, commentSchema)

export default CommentModel