import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../public-site/pages/Home";
import Register from "../services/Register";
import About from "../public-site/pages/About";
import KruInternship from "../public-site/pages/Internship";
import DonatePage from "../public-site/pages/DonatePage";
import AdminDashboard from "../public-site/pages/overview";
import CoursesCard from "../public-site/pages/CoursesCard";
import Mainlayout from "../public-site/components/Mainlayout";
import Login from "../services/Login";
import Sidebar from "../dashboard/components/design_sidebar/Sidebar";
import Table from "../public-site/pages/User_table_list";
import Add_new_users from "../dashboard/pages/users/Add_new_users";
import Reset_password from "../public-site/pages/Reset_password";
import ConfirmOTPpage from "../public-site/pages/ConfirmOTPpage";

import Mobliemenusetting from "../dashboard/layout/Mobliemenusetting";

// import Table from "../public-site/pages/User_table_list";
// import Add_new_users from "../dashboard/pages/users/Add_new_users";

// import FormListLogo from "../public-site/components/FormListLogo";
function AppRoutes() {
  return (
    <Routes>
    
      <Route element={<Mainlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kruinternship" element={<KruInternship />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/page/overview" element={<AdminDashboard />} />
        <Route path="/coursecard" element={<CoursesCard />} />
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="dashboard" element={<Sidebar/>}/>
      <Route path="/menu-config" element={<Mobliemenusetting/>}/>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Sidebar />}>
        <Route path="table" element={<Table />} />
        <Route path="add_new_users" element={<Add_new_users />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<Reset_password />} />
      <Route path="/verify-otp" element={<ConfirmOTPpage />} />
      <Route path="/dashboard" element={<Sidebar />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
  );
}

export default AppRoutes;
