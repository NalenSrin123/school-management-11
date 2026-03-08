import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Courses from '../public-site/pages/Courses'
import Register from '../services/Register';
import ConfirmOTPpage from '../public-site/pages/ConfoirmOTPpage';
import ResetPassword from '../public-site/pages/ResetPassword';
import Design_OTP_Page from '../public-site/pages/Design_OTP_Page';
import KruInternship from '../public-site/pages/Internship';
import Position from '../public-site/pages/Position';
import Login from '../services/Login';
import Footer from './Footer';
import HeroSection from '../public-site/components/HeroSection';
import CourseCard from '../public-site/components/CourseCard';
import Reset_password from '../public-site/pages/Reset_password';
import Features from '../public-site/pages/Design_Feature_in_home_page';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Courses/>
      <Register/>
      <ConfirmOTPpage/>
      <ResetPassword/>
      <Design_OTP_Page/>
      <KruInternship/>
      <Position/>
      <Login/>
      <Footer/>
      <HeroSection/>
      {/* <CourseCard/> */}
      <Reset_password/>
      <Features/>
    </BrowserRouter>
   
  );
}

export default App;