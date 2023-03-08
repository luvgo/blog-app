export type UserType = {
  _id: number
  name: string
  email: string
  blogs?: number[]
  createdAt: string
  updatedAt: string
}

export type BlogType = {
  _id: number
  title: string
  definition?: string
  createdAt: string
  updatedAt: string
  author: UserType
  blog: Buffer
}
