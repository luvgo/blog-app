import express from 'express'
import { TypedRequestBody, TypedRequestParam } from '../../types/RequestTypes'
import { BlogType } from '../../types/SchemaTypes'
import { Blog, User } from '../model'
import { TypedResponse } from '../../types/ResponseTypes'
import mongoose from 'mongoose'

export const blogRouter = express.Router()

// Returns all the Blogs from MongoDB
blogRouter.get('/', async (req, res: TypedResponse<BlogType[]>) => {
  const posts: BlogType[] = await Blog.find()
  res.json(posts)
})

// Posts a blog to MongoDB and returns a blog to frontend
blogRouter.post(
  '/',
  async (req: TypedRequestBody<BlogType>, res: TypedResponse<BlogType>) => {
    const post = await Blog.create({
      title: req.body.title,
      definition: req.body.definition,
      author: '6405765f16dc235090b2a6dc',
    })
    res.json(post)
  },
)

blogRouter
  .route('/:id')
  .get(async (req: TypedRequestBody<BlogType>, res) => {
    res.send(req.body)
  })
  .delete(
    async (req: TypedRequestBody<BlogType>, res: TypedResponse<BlogType>) => {
      const blog = req.body
      res.json(blog)
    },
  )

blogRouter.param(
  'id',
  async (req: TypedRequestBody<BlogType>, res, next, id) => {
    try {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        next(new Error('Invalid blog id'))
      }
      const blog = await Blog.findById(id)
      if (!blog) {
        next(new Error('Invalid blog id'))
      }
      req.body = blog as unknown as BlogType
      next()
    } catch (err) {
      console.error(err)
      next(err)
    }
  },
)
