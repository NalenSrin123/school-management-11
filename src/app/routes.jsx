import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../public-site/pages/Home';
import Login from '../services/Login';
import Register from '../services/Register';
import About from '../public-site/pages/About';
import KruInternship from '../public-site/pages/Internship';
import DonatePage from '../public-site/pages/DonatePage';
import ConfirmOTPpage from '../public-site/pages/ConfirmOTPpage';
import Design_OTP_Page from '../public-site/pages/Design_OTP_Page';
import Position from '../public-site/pages/Position';
import Reset_password from '../public-site/pages/Reset_password';
import CoursesCard from '../public-site/pages/CoursesCard';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/kruinternship' element={<KruInternship />} />
      <Route path='/donate' element={<DonatePage />} />
      <Route path='/admin/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/confirm-otp' element={<ConfirmOTPpage />} />
      <Route path='/design-otp' element={<Design_OTP_Page />} />
      <Route path='/position' element={<Position />} />
      <Route path='/reset-password' element={<Reset_password />} />
      <Route path='/courses' element={<CoursesCard />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  );
}

export default AppRoutes;