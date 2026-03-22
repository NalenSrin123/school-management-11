import React from 'react';
import { Search, Bell, MessageSquare, ChevronDown } from 'lucide-react';

const Headbar = () => {
  return (
    <header className="h-16 bg-white flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">

      <div className="relative w-96">
        <input 
          type="text" 
          placeholder="What do you want to find?" 
          className="w-full bg-gray-50 border-none rounded-full py-2 pl-4 pr-10 focus:ring-2 focus:ring-purple-200 outline-none text-sm"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-gray-400">
          <Search size={18} />
        </div>
      </div>

     
      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-gray-500">
          <div className="relative cursor-pointer">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <MessageSquare size={20} className="cursor-pointer" />
        </div>
        
        <div className="flex items-center gap-3 border-l pl-6">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800 leading-none">Priscilla Lily</p>
            <p className="text-[11px] text-gray-400 mt-1">Admin</p>
          </div>
          <img 
            src="https://i.pinimg.com/736x/8e/40/f8/8e40f83a0f6b6f2e66803af56507b05d.jpg" 
            alt="Profile" 
            className="w-9 h-9 rounded-full object-cover ring-2 ring-purple-50"
          />
          <ChevronDown size={16} className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Headbar;