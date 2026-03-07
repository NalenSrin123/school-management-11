import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './app/App.jsx'
import Navbar from './public-site/layout/Navbar.jsx'
import HeroSection from './public-site/components/HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    < HeroSection/>
  </StrictMode>,
)