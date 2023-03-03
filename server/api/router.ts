import express from 'express'
import mongoose from 'mongoose';
import { Response, Request } from 'express';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const DATABASE_URL = process.env.DATABASE_URL || "3000"

const PORT = process.env.PORT || "5050"

app.get('/', (req: Request, res: Response) => {
    res.send({
        title: "Title",
        date: Date.now(),
        body: "aslkdjfajfkaljfklasjflkasjf"
    })
})

mongoose.connect(DATABASE_URL)
    .then(() => {
        app.listen(PORT)
        console.log(`Listening on port: ${PORT}`)
    });