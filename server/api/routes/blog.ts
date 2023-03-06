import express from 'express'
import { Request, Response } from 'express'
import { TypedRequestBody, TypedRequestParam } from '../../utils/RequestTypes'
import { BlogType } from '../../../types/SchemaTypes'
import { Blog } from '../model'
import { TypedResponse } from '../../utils/ResponseTypes'
import { exit } from 'process'

export const router = express.Router()

// Returns all the Blogs from MongoDB
router.get('/', async (req, res: TypedResponse<BlogType[]>) => {
  const posts: BlogType[] = await Blog.find()
  res.json(posts)
})

// Posts a blog to MongoDB and returns a blog to frontendO
router.post('/', async (req: TypedRequestBody<BlogType>, res) => {
  const post = await Blog.create({
    title: req.body.title,
    definition: req.body.definition,
    author: req.body.author,
  })
  res.json(post)
})

router
  .route('/:id')
  .get(async (req, res: TypedResponse<BlogType>) => {
    const blogId = await Blog.exists({ _id: req.params.id })
    if (blogId) {
      const blog = (await Blog.findById(blogId)) as BlogType
      res.json(blog)
    } else {
    }
  })
  .delete(async (req, res: TypedResponse<BlogType>) => {
    const blogId = await Blog.exists({ _id: req.params.id })
    if (blogId) {
      const blog = (await Blog.findByIdAndDelete(blogId)) as BlogType
      res.json(blog)
    }
  })
