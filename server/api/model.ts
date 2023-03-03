import mongoose from 'mongoose'

const Schema = mongoose.Schema
// const ObjectId = mongoose.Types.ObjectId;

const BlogSchema = new Schema({
  title: String,
  body: String,
  date: Date,
})

export const Blog = mongoose.model('blog', BlogSchema)
