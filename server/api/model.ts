import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const AuthorSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
})

const BlogPostSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  title: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: AuthorSchema,
    required: true,
  },
  blog: {
    type: Buffer,
    required: false,
  },
})

export const BlogPost = mongoose.model('blog', BlogPostSchema)
