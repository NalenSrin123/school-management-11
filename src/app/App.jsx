import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import About from '../public-site/pages/About'

import Register from '../services/Register';
import Design_OTP_Page from '../public-site/pages/Design_OTP_Page';
import KruInternship from '../public-site/pages/Internship';
import Position from '../public-site/pages/Position';
import Login from '../services/Login';
import Footer from './Footer';
import HeroSection from '../public-site/components/HeroSection';
import Reset_password from '../public-site/pages/Reset_password';
import Navbar from '../public-site/layout/Navbar';
import CoursesCard from '../public-site/pages/CoursesCard';
import CourseDetail from '../public-site/pages/CourseDetail';
import ConfirmOTPpage from '../public-site/pages/ConfirmOTPpage'


function App() {
  return (
    <div>
      {/* // <BrowserRouter>  */}
      <AppRoutes />
      <Register/>
      <ConfirmOTPpage/>
      {/* <ResetPassword/> */}
      <Design_OTP_Page/>
      <KruInternship/>
      <Position/>
      <Login/>
      <Footer/>
      <HeroSection/>
      <Reset_password/>
      <Navbar/>
      </div>
    // </BrowserRouter>
   
  );
}

export default App;
