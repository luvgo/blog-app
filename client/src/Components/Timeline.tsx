import { useEffect, useState } from 'react'
import { AuthorType, BlogType } from '../../../types/SchemaTypes'
import Container from './Container'
import { Navbar } from './Navbar'

function BlogPost({
  title,
  date,
  definition,
  author,
}: {
  title: string
  date: string
  definition: string
  author: AuthorType
}) {
  return (
    <li className='p-2 m-3 bg-slate-700 hover:bg-slate-600 rounded-md transition-all hover:rounded-xl'>
      <p>{`${author.name} - ${date}`}</p>
      <button
        type='button'
        className='capitalize font-semibold hover:text-blue-700'
      >
        {title}
      </button>
      <p>{definition}</p>
    </li>
  )
}

export function Timeline() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:5000/api/v1')
      const blog: BlogType[] = await res.json()
      setBlog(blog)
    }

    fetchData()
  }, [])

  const [blogs, setBlog] = useState<BlogType[]>([])
  return (
    <>
      <Navbar />
      <Container>
        {blogs.map((blog: BlogType) => {
          return (
            <BlogPost
              key={blog._id}
              definition={blog.definition || ''}
              date={blog.createdAt}
              title={blog.title}
              author={blog.author}
            />
          )
        })}
      </Container>
    </>
  )
}
