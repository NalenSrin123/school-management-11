import React, { useState } from 'react';
import { 
  Home, Users, GraduationCap, Library, UserCircle, 
  BookOpen, Calendar, CheckSquare, ClipboardList, 
  BellRing, Truck, Building2, ChevronDown, ChevronRight, Pipette, NotebookPen, CarFront, Hotel,
} from 'lucide-react';

const Sidebar = () => {
  const [isHomeOpen, setIsHomeOpen] = useState(true);

  return (
    <aside className="w-64 bg-white shadow-sm flex flex-col h-screen sticky top-0">
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">ia</span>
        </div>
        <span className="text-xl font-bold text-gray-800">Academy</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
      
        <div>
          <button 
            onClick={() => setIsHomeOpen(!isHomeOpen)}
            className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${isHomeOpen ? 'text-purple-600 bg-purple-50' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <div className="flex items-center gap-3">
              <Home size={20} />
              <span className="font-medium text-sm">Home</span>
            </div>
            {isHomeOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          
          {isHomeOpen && (
            <div className="ml-9 mt-1 space-y-1 border-l-2 border-purple-100">
              {['Admin', 'Students', 'Teachers'].map((item) => (
                <button 
                  key={item} 
                  className={`w-full text-left p-2 text-sm pl-4 transition-colors ${item === 'Admin' ? 'text-purple-600 font-semibold border-l-2 border-purple-600 -ml-[2px]' : 'text-gray-500 hover:text-purple-600'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>

        <NavItem icon={<GraduationCap size={20} />} label="Students" hasSub />
        <NavItem icon={<Users size={20} />} label="Teachers" hasSub />
        <NavItem icon={<Library size={20} />} label="Library" />
        <NavItem icon={<UserCircle size={20} />} label="Account" hasSub />
        <NavItem icon={<Building2 size={20} />} label="Class" />
        <NavItem icon={<BookOpen size={20} />} label="Subject" />
        <NavItem icon={<Calendar size={20} />} label="Routine" />
        <NavItem icon={<CheckSquare size={20} />} label="Attendance" />
        <NavItem icon={<Pipette size={20} />} label="Exam" />
        <NavItem icon={<NotebookPen size={20} />} label="Notice" />
        <NavItem icon={<CarFront size={20} />} label="Transport" />
        <NavItem icon={<Hotel size={20} />} label="Hostel" />
      </nav>
    </aside>
  );
};

const NavItem = ({ icon, label, hasSub = false }) => (
  <button className="w-full flex items-center justify-between p-3 text-gray-500 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all">
    <div className="flex items-center gap-3">
      {icon}
      <span className="font-medium text-sm">{label}</span>
    </div>
    {hasSub && <ChevronDown size={16} />}
  </button>
);

export default Sidebar;