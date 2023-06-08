import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { ParallaxProvider } from 'react-scroll-parallax'
import App from './App.tsx'
import Portfolio from './components/pages/Portfolio.tsx'
import ErrorPage from './components/pages/ErrorPage.tsx'
import './index.css'

const router = createBrowserRouter([
 { 
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />
},
  {
  path: "/portfolio",
  element: <Portfolio />
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ParallaxProvider><RouterProvider router={router} /></ParallaxProvider>
  </React.StrictMode>,
)
