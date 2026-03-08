import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App.jsx'
import Internship from './public-site/pages/internship.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)