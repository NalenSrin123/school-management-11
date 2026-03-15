import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../public-site/pages/Home'
import Login from '../dashboard/pages/auth/Login'
import Register from '../services/Register'
import About from '../public-site/pages/About'
import KruInternship from '../public-site/pages/Internship'
import DonatePage from '../public-site/pages/DonatePage'
import CoursesCard from '../public-site/pages/CoursesCard'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/kruinternship' element={<KruInternship/>}/>
      <Route path='/donate' element={<DonatePage/>}/>
      <Route path='/admin/login' element={<Login />} />
      <Route path='/coursecard' element={<CoursesCard />}/>
      <Route path='*' element={<Navigate to='/' replace />} />
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
  )
}

export default AppRoutes