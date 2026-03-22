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
import StudentList from "../dashboard/pages/courses/StudentList";
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
       <Route path="/courses" element={<StudentList />} />
    </Routes>
  );
}

export default AppRoutes;
