import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../public-site/pages/Home'
import Login from '../dashboard/pages/auth/Login'
import Register from '../services/Register'
import About from '../public-site/pages/About'
import KruInternship from '../public-site/pages/Internship'
import DonatePage from '../public-site/pages/DonatePage'
import AdminDashboard from '../public-site/pages/overview'

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>}/>
      <Route path='/kruinternship' element={<KruInternship/>}/>
      <Route path='/donate' element={<DonatePage/>}/>
      <Route path='/admin/login' element={<Login />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/page/overview' element={<AdminDashboard/>} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default AppRoutes