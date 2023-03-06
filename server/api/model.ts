import mongoose from 'mongoose'
import { BlogType, UserType } from '../types/SchemaTypes'

const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const UserSchema = new Schema<UserType>({
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
    ref: 'Blog',
    requiredPaths: false,
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

const BlogSchema = new Schema<BlogType>({
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

export const Blog = mongoose.model<BlogType>('Blog', BlogSchema)

export const User = mongoose.model<UserType>('User', UserSchema)
