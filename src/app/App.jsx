import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Courses from '../public-site/pages/Courses'
import Navbar from '../public-site/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
        <Navbar />
   <Courses />

    </BrowserRouter>
  )
}

export default App