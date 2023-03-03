import express from 'express'
import mongoose from 'mongoose'
import { Response, Request } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { exit } from 'process'

dotenv.config()

const app = express()

app.use(cors())

const DATABASE_URL = process.env.DATABASE_URL || '3000'

const PORT = process.env.PORT || '5000'
const HOSTNAME = '127.0.0.1'

app.get('/', (req: Request, res: Response) => {
  res.json({
    title: 'Title',
    date: new Date().toISOString(),
    body: 'aslkdjfajfkaljfklasjflkasjf',
  })
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
