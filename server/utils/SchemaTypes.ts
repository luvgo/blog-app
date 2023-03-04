export type AuthorType = {
  name: string
  email: string
}

export type BlogPostType = {
  _id: number
  title: string
  definition?: string
  createdAt: Date
  updatedAt: Date
  author: AuthorType
  blog: Buffer
}
