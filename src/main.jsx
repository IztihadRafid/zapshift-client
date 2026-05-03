import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import AuthProvider from './contexts/AuthContext/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className="bg-gray-200"><RouterProvider router={router}></RouterProvider></div>
    </AuthProvider>
  </StrictMode>,
)
