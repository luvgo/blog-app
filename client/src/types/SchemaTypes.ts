export type UserType = {
  _id: number
  name: string
  email: string
  blogs?: number[]
  createdAt: Date
  updatedAt: Date
}

export type BlogType = {
  _id: number
  title: string
  definition?: string
  createdAt: Date
  updatedAt: Date
  author: UserType
  blog: Buffer
}
