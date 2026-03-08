import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-0 w-full z-50 px-6 lg:px-16">
      
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex items-center justify-between border border-white/20">
        
        
        <div className="flex items-center gap-2 pl-2">
          <div className=" p-1  w-15 h-15 flex items-center justify-center ">
            {/* <span className="font-bold text-white text-xl italic">E</span> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRerloxG_go8MpvD_FYvHwpSWb7580gwmBw&s" alt="" />
          </div>
          <h1 className="text-xl font-black tracking-tighter uppercase flex gap-1">
            <span className="text-[#FFC107]">ETEC</span>
            <span className="text-[#0D47A1]">CENTER</span>
          </h1>
        </div>

       
        <ul className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
          <li className="text-[#FF9800] cursor-pointer hover:opacity-80 transition">Home</li>
          <li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition">About Us</li>
          <li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition">Internship</li>
          <li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition">Donate</li>
          <li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition flex items-center gap-1">
            Our Courses <span className="text-[10px]">▼</span>
          </li>
          <li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition normal-case">Login</li>
        </ul>

        
        <button className="bg-[#2979FF] hover:bg-blue-600 text-white px-8 py-2.5 rounded-full text-[12px] font-bold shadow-md transition-all active:scale-95">
          Enroll
        </button>
      </div>
    </nav>
  );
};

export default Navbar;