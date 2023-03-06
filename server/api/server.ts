import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { exit } from 'process'
import { router } from './routes/blog'

dotenv.config()

const app = express()
const blogRouter = router

const DATABASE_URL = process.env.DATABASE_URL || '3000'

const PORT = process.env.PORT || '5000'
const HOSTNAME = '127.0.0.1'

app.use('/api/v1', blogRouter)
app.use(cors())
app.use(express.json())

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
