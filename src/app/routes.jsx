import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../public-site/pages/Home'
import Login from '../dashboard/pages/auth/Login'
import Register from '../services/Register'
import { GrOverview } from 'react-icons/gr'
import AdminDashboard from '../public-site/pages/overview'

function AppRoutes() {
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='*' element={<Navigate to='/' replace />} />
      <Route path='/register' element={<Register/>} /> */}
      <Route path='/page/overview' element={<AdminDashboard/>} />
    </Routes>
  )
}

export default AppRoutes