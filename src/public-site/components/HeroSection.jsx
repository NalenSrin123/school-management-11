import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-visible">
      
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
         
          backgroundImage: `url('src/assets/images/1.jpg')` 
        }}
      >
        
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0288D1]/85 via-[#01579B]/90 to-[#1A237E]/95" /> */}
        
        
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M0,1000 C300,800 400,1000 1000,700" stroke="white" fill="transparent" strokeWidth="0.5" />
            <path d="M0,850 C200,650 500,850 1000,550" stroke="white" fill="transparent" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      
      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center pt-10 pb-48 gap-16">
        
        
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            {/* <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-[80px]" />
            <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-blue-300/40 to-indigo-900/60 shadow-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm">
               <span className="text-[120px] drop-shadow-2xl opacity-90">🌐</span>
            </div> */}
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left mt-20">
          <h2 className="text-[45px] lg:text-[60px] font-black leading-tight mb-6 uppercase tracking-tight drop-shadow-lg">
            ETEC CENTER
          </h2>
          <p className="text-lg lg:text-xl text-blue-50/90 leading-relaxed mb-10 max-w-2xl font-light">
             We are a specialized center that trains students in software 
             engineering, web development, mobile app development, and 
             database management to help them gain practical, jop-ready skill.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="bg-[#1a237e] hover:bg-black px-10 py-3.5 rounded-full font-bold shadow-lg border border-white/10 transition-all">
              Read more . . .
            </button>
            <button className="bg-[#64B5F6]/40 hover:bg-[#64B5F6]/60 px-10 py-3.5 rounded-full font-bold shadow-lg border border-white/10 backdrop-blur-md transition-all">
              Ask for information
            </button>
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-[5px] left-0 w-full px-6 lg:px-16 z-20">
        <div className="max-w-8xl mx-auto bg-white rounded-[45px] py-10 px-8 lg:px-14 shadow-[0_25px_50px_rgba(0,0,0,0.2)] flex flex-wrap justify-between items-center gap-8">
           <StatItem icon="🏆" title="Awards Program" sub="Excellence In Tech" />
           <StatItem icon="💼" title="4.6k have jobs" sub="Most people are employed" />
           <StatItem icon="📊" title="10.5k subscribers" sub="Join our community now" />
           <StatItem icon="📉" title="A Successful Life" sub="Living a Successful Life" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, title, sub }) => (
  <div className="flex items-center gap-5">
    <div className="w-16 h-16 bg-[#FFF8E1] rounded-full flex items-center justify-center text-3xl shadow-inner">{icon}</div>
    <div className="text-left flex flex-col">
      <span className="text-[#263238] font-black text-lg leading-tight">{title}</span>
      <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mt-1">{sub}</span>
    </div>
  </div>
);

export default HeroSection;