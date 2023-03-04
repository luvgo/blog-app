import { useEffect, useState } from 'react'
import { blog, BlogPostType } from '../utils/types'
import Container from './Container'

function BlogPost({
  title,
  date,
  definition,
}: {
  title: string
  date: string
  definition: string
}) {
  return (
    <li>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{definition}</p>
    </li>
  )
}

export function Timeline() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:5000/api/v1')
      const blog: BlogPostType[] = await res.json()
      setBlog(blog)
    }

    fetchData()
  }, [])

  const [blogs, setBlog] = useState<blog[]>([])
  return (
    <Container>
      {blogs.map((blog: BlogPostType) => {
        return (
          <BlogPost
            key={blog._id}
            definition={blog.definition || ''}
            date={blog.createdAt}
            title={blog.title}
          />
        )
      })}
    </Container>
  )
}
