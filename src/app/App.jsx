
// import { BrowserRouter } from "react-router-dom";
import Create_logo from "../dashboard/layout/Create_logo";
// import List_logo from "../dashboard/layout/List_logo";

import { BrowserRouter } from 'react-router-dom'

import AppRoutes from './routes'
import About from '../public-site/pages/About'
import MoblieMenuSetting from '../dashboard/layout/MoblieMenuSetting';

import Register from '../services/Register';
import ConfirmOTPpage from '../public-site/pages/ConfirmOTPpage';
import Design_OTP_Page from '../public-site/pages/Design_OTP_Page';
import KruInternship from '../public-site/pages/Internship';
import Position from '../public-site/pages/Position';
import Login from '../services/Login';
import Footer from './Footer';
import HeroSection from '../public-site/components/HeroSection';
import Reset_password from '../public-site/pages/Reset_password';
import Navbar from '../public-site/layout/Navbar';
import CoursesCard from '../public-site/pages/CoursesCard';
import Add_new_users from '../dashboard/pages/users/Add_new_users';




function App() {
  return (
    <BrowserRouter>
      {/* <List_logo /> */}
      <Create_logo/>
      
    </BrowserRouter>
  );
}

export default App;