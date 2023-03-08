import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'
import { Blog } from './Components/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
