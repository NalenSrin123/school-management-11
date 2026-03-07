import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Courses from '../public-site/pages/CoursesCard'
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
