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

import Mobliemenusetting from "../dashboard/layout/Mobliemenusetting";

import Table from "../public-site/pages/User_table_list";
import Add_new_users from "../dashboard/pages/users/Add_new_users";

import FormListLogo from "../public-site/components/FormListLogo";
function AppRoutes() {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kruinternship" element={<KruInternship />} />
        <Route path="/donate" element={<DonatePage />} />
        {/* <Route path="/admin/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/page/overview" element={<AdminDashboard />} />
        <Route path="/coursecard" element={<CoursesCard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="login" element={<Login/>}/>
      <Route path="dashboard" element={<Sidebar/>}/>
      <Route path="/menu-config" element={<Mobliemenusetting/>}/>
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Sidebar />}>
        <Route path="table" element={<Table />} />
        <Route path="add_new_users" element={<Add_new_users />} />
      </Route>

    </Routes>
  );
}

export default AppRoutes;
