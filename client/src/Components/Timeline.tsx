import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserType, BlogType } from '../types/SchemaTypes'
import Container from './Container'

function BlogPost({
  title,
  date,
  definition,
  author,
}: {
  title: string
  date: string
  definition: string
  author: UserType
}) {
  return (
    <div className='mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow-md'>
      <img
        src='https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        className='aspect-video w-full object-cover'
        alt=''
      />
      <div className='p-4'>
        <div className='flex space-x-2 items-center'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aL6la4_S3lT19P_kgeihVVlOC9XohHtlbha3o_0LwA&s'
            className='rounded-full w-10 h-10 object-cover'
          ></img>
          <p className='mb-1 text-sm text-primary-500'>
            {author.name} • <time>{author.createdAt}</time>
          </p>
        </div>
        <div className='p-1' />
        <h3 className='text-xl font-medium text-gray-900'>
          {
            <Link to='/blog' className='hover:text-blue-400 hover:underline'>
              {title}
            </Link>
          }
        </h3>
        <p className='mt-1 text-gray-600'>{definition}</p>
        <div className='mt-4 flex gap-2'>
          <span className='inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600'>
            Design
          </span>
          <span className='inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600'>
            Product
          </span>
          <span className='inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600'>
            Develop
          </span>
        </div>
      </div>
    </div>
  )
}

export function Timeline() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:5000/api/v1/blog')
      const blog: BlogType[] = await res.json()
      setBlog(blog)
    }

    fetchData()
  }, [])

  const [blogs, setBlog] = useState<BlogType[]>([])
  return (
    <>
      <Container classNames='grid grid-cols-1 m-3 gap-3 sm:grid-cols-2 md:grid-cols-3'>
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
