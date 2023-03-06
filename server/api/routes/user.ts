import express from 'express'
import { TypedRequestBody, TypedRequestParam } from '../../types/RequestTypes'
import { UserType } from '../../types/SchemaTypes'
import { User } from '../model'
import { TypedResponse } from '../../types/ResponseTypes'

export const userRouter = express.Router()

// Returns all the Blogs from MongoDB
userRouter.get('/', async (req, res: TypedResponse<UserType[]>) => {
  const user: UserType[] = await User.find()
  res.json(user)
})

// Posts a blog to MongoDB and returns a blog to frontend
userRouter.post(
  '/',
  async (req: TypedRequestBody<UserType>, res: TypedResponse<UserType>) => {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      blogs: req.body.blogs,
    })
    res.json(user)
  },
)
