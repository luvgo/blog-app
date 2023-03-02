import express from 'express'
import mongoose from 'mongoose';

const app = express()

const MONGO_URL = process.env.MONGO_URL || "3000"

mongoose.connect(MONGO_URL)
    .then(() => app.listen("5000"));