import mongoose from 'mongoose'

type ObjectId = mongoose.Types.ObjectId

export type UserType = {
  _id: {
    type: ObjectId
    auto: true
  }
  name: string
  email: string
  blogs?: number[]
  createdAt: Date
  updatedAt: Date
}

export type BlogType = {
  _id: {
    type: ObjectId
    auto: true
  }
  title: string
  definition?: string
  createdAt: Date
  updatedAt: Date
  author: UserType
  blog?: Buffer
}
