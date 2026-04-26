import React from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Home, Users, BookOpen, NotebookPen, CarFront, UserCircle } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">
      <aside className="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-sm flex flex-col">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">ia</span>
          </div>
          <span className="text-xl font-bold text-gray-800">Academy</span>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <NavItem to="/dashboard" icon={<Home size={20} />} label="Overview" location={location} exact />

          {/* Users highlights for all nested paths under /dashboard/users */}
          <NavItem to="/dashboard/users" icon={<Users size={20} />} label="Users" location={location} />

          <NavItem to="/dashboard/course" icon={<BookOpen size={20} />} label="Courses" location={location} />
          <NavItem to="/dashboard/donate" icon={<NotebookPen size={20} />} label="Donate" location={location} />
          <NavItem to="/menu-config" icon={<CarFront size={20} />} label="Menu Config" location={location} />
          <NavItem to="/account" icon={<UserCircle size={20} />} label="Account" location={location} />
        </nav>
      </aside>

      <main className="min-h-screen ml-64">
        <Outlet />
      </main>
    </div>
  );
};

const NavItem = ({ icon, label, to = '#', location, exact = false }) => {
  const isActive = exact
    ? location.pathname === to
    : location.pathname === to || location.pathname.startsWith(to);

  return (
    <NavLink
      to={to}
      className={`w-full flex items-center justify-between p-3 rounded-xl transition-all
        ${isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-500 hover:bg-gray-50 hover:text-purple-600'}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="font-medium text-sm">{label}</span>
      </div>
    </NavLink>
  );
};

export default Sidebar;
