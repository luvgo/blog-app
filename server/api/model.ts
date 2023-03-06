import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const UserSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  name: {
    type: String,
    minlength: 1,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  blogs: {
    type: [ObjectId],
    ref: 'blog',
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

const BlogSchema = new Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  title: {
    type: String,
    minlength: 1,
    required: true,
  },
  definition: {
    type: String,
    required: false,
  },
  author: {
    type: ObjectId,
    ref: 'User',
    required: true,
  },
  blog: {
    type: Buffer,
    required: false,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export const Blog = mongoose.model('Blog', BlogSchema)

export const User = mongoose.model('User', UserSchema)
