import { useEffect, useState } from 'react'

type blog = {
  title: string
  date: Date
  body: string
}

function App() {
  async function getBlog() {}

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://127.0.0.1:5000/')
      const blog: blog = await res.json()
      setTitle(blog.title)
      setDate(blog.date)
      setBody(blog.body)
    }

    fetchData()
  }, [])

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [body, setBody] = useState('')

  return (
    <div className='font-Mono'>
      <h1 className='text-center text-4xl font-bold text-gray-800'>{title}</h1>
      <p>{date}</p>
      <p>{body}</p>
    </div>
  )
}

export default App
