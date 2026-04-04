
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../public-site/pages/Home";
import Register from "../services/Register";
import About from "../public-site/pages/About";
import KruInternship from "../public-site/pages/Internship";
import DonatePage from "../public-site/pages/DonatePage";
import AdminDashboard from "../public-site/pages/overview.jsx"; 

import CoursesCard from "../public-site/pages/CoursesCard";
import Mainlayout from "../public-site/components/Mainlayout";
import Login from "../services/Login";
import Sidebar from "../dashboard/components/design_sidebar/sidebar.jsx";
import DashboardLayout from "../dashboard/layout/DashboardLayout";
import Add_new_users from "../dashboard/pages/users/Add_new_users";
import ListEvent from "../dashboard/pages/event/Listevent";


function AppRoutes() {
  return (
    <Routes>
      
      <Route element={<Mainlayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kruinternship" element={<KruInternship />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/coursecard" element={<CoursesCard />} />
        <Route path="/page/overview" element={<AdminDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
}

export default AppRoutes;


