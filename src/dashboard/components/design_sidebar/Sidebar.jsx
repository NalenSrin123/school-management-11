import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";
import { 
  Home, Users, GraduationCap, Library, UserCircle, 
  BookOpen, Calendar, CheckSquare, ClipboardList, 
  BellRing, Truck, Building2, ChevronDown, ChevronRight, Pipette, NotebookPen, CarFront, Hotel,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  return (
    <>
    <aside className="w-64 bg-white shadow-sm flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">ia</span>
        </div>
        <span className="text-xl font-bold text-gray-800">Academy</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {/* Home Menu with Dropdown */}
        <div>
          <button 
            onClick={() => setIsHomeOpen(!isHomeOpen)}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${isHomeOpen ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3">
              <Home size={20} />
              <span className="font-medium text-sm">Overview</span>
            </div>
            {/* {isHomeOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />} */}
          </button>
      
        </div>

        <NavItem icon={<GraduationCap size={20} />} label="Users" hasSub />
        <NavItem icon={<BookOpen size={20} />} label="Courses" />
        <NavItem icon={<Calendar size={20} />} label="Logo" />
        <NavItem icon={<NotebookPen size={20} />} label="Donate" />
        
        <NavItem icon={<CarFront size={20} />} label="Menu Config" hasSub to="/menu-config"/>
        
        <NavItem icon={<UserCircle size={20} />} label="Account" hasSub />
      </nav>
    </aside>
    <main>
      <Outlet/>
    </main>
    </>
  );
};

const NavItem = ({ icon, label, hasSub = false, to = '' }) => {
  const navigate = useNavigate();
  return (
  <button onClick={() => navigate(to)} className="w-full flex items-center justify-between p-3 text-gray-500 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all">
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
    {/* {hasSub && <ChevronDown size={16} />} */}
  </button>
);
}

export default Sidebar;