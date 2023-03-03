import { useEffect, useState } from 'react'

type blog = {
  title: string
  date: string
  body: string
}

function App() {
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:5000/api/v1')
      const blog = await res.json()

      setBlog(blog)
    }

    fetchData()
  }, [])

  const [blogs, setBlog] = useState<blog[]>([])
  console.log(blogs)
  return (
    <div className='font-Mono'>
      {blogs.map(blog => {
        return (
          <>
            <h1 className='text-center text-4xl font-bold text-gray-800'>
              {blog.title}
            </h1>
            <p>{blog.date}</p>
            <p>{blog.body}</p>
          </>
        )
      })}
    </div>
  )
}

export default App
