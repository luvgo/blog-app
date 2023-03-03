import express from 'express'
import mongoose from 'mongoose'
import { Response, Request } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { exit } from 'process'
import { Blog } from './model'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const DATABASE_URL = process.env.DATABASE_URL || '3000'

const PORT = process.env.PORT || '5000'
const HOSTNAME = '127.0.0.1'

// Returns all the Blogs from MongoDB
app.get('/api/v1', async (req: Request, res: Response) => {
  const posts = await Blog.find()
  res.send(posts)
})

// Posts a blog to MongoDB and returns a blog to frontend
app.post('/api/v1', async (req: Request, res: Response) => {
  const post = new Blog({
    title: req.body.title,
    date: new Date(req.body.date),
    body: req.body.body,
  })
  const blog = await post.save()
  res.send(blog)
})

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(`Listening on http://${HOSTNAME}:${PORT}/`)
    app.listen(PORT)
  })
  .catch(err => {
    console.error(err)
    exit(1)
  })
