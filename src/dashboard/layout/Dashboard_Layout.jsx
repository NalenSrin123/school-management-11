// dashboard/layout/DashboardLayout.jsx
import Sidebar from "../components/design_sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard_Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}