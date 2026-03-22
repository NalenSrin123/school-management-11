import React from 'react';

function CoursesCard() {
  const courseItems = [
   
    
    { title: "BASIC/ADVANCE C++ / OOP / ALGORITHM / MYSQL / PROJECT", color: "border-blue-500", dot: "bg-blue-500", ml: "lg:ml-[-100px]", pl: "lg:pl-32" ,shadow: "group-hover:shadow-blue-400/50"},
    { title: "HTML, CSS, BOOTSTRAP, JAVASCRIPT, VUE.JS", color: "border-orange-500", dot: "bg-orange-500", ml: "lg:ml-[-50px]", pl: "lg:pl-44" ,shadow: "group-hover:shadow-blue-400/50"},
    { title: "BASIC/ADVANCE PHP / MYSQL / AJAX / PROJECT", color: "border-blue-500", dot: "bg-blue-500", ml: "lg:ml-[-50px]", pl: "lg:pl-50" ,shadow: "group-hover:shadow-blue-400/50"},
    { title: "BASIC NETWORK / IT SUPPORT / CYBER / TOOL CONFIG", color: "border-orange-500", dot: "bg-orange-500", ml: "lg:ml-[-50px]", pl: "lg:pl-53" ,shadow: "group-hover:shadow-blue-400/50"},
    { title: "UX/UI DESIGNER / PHOTOSHOP / ILLUSTRATOR / PROJECT", color: "border-blue-500", dot: "bg-blue-500", ml: "lg:ml-[-70px", pl: "lg:pl-35",shadow: "group-hover:shadow-blue-400/50" },
    { title: "BASIC/ADVANCE DART / FLUTTER / LARAVEL / PROJECT", color: "border-orange-500", dot: "bg-orange-500", ml: "lg:ml-[-50px]", pl: "lg:pl-44" ,shadow: "group-hover:shadow-blue-400/50"},
    { title: "BASIC/ADVANCE C# / JAVA / MYSQL / PROJECT", color: "border-blue-500", dot: "bg-blue-500", ml: "lg:ml-[-100px]", pl: "lg:pl-32",shadow: "group-hover:shadow-blue-400/50" }
  ];

  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center p-4 overflow-hidden font-sans">
      <div className="relative mx-auto px-6 lg:px-16 relative border-[6px] border-white min-h-[10vh] p-6 md:p-14 bg-white flex flex-col">
        
        {/* Header Section */}
        <div className="text-center mb-7 relative ">
          <div className="border-[4px] border-red-600 px-10 py-2 inline-block bg-white shadow-[6px_6px_0px_red]">
            <h1 className="text-3xl md:text-5xl font-black text-red-600 uppercase tracking-tighter leading-none">
              New curriculum
            </h1>
          </div>
          <p className="text-black text-lg md:text-2xl font-black mt-4 italic uppercase">
            Begin Your Education with Us, End with Job Opportunity
          </p>
        </div>

        <div className="relative w-full flex flex-col lg:flex-row items-center min-h-[600px]">
          
         
          <div className="z-30 lg:absolute lg:left-[-40px] lg:top-1/2 lg:-translate-y-1/2 flex justify-center w-full lg:w-auto mb-10 lg:mb-0">
            <div className="w-[300px] h-[300px] md:w-[550px] md:h-[550px] rounded-full overflow-hidden border-[20px] border-white shadow-2xl ring-4 ring-gray-50">
              <img 
                src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/649282164_939723941906435_5997362428041520720_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeF1G8DIxfKVbGXas6zmKR4ndI07-tCPCQF0jTv60I8JAfWz0m97AhKSO3fRAwt8R_yS9Y6VKB1E_0U2vI-AAPJT&_nc_ohc=4pcQcTVTVEkQ7kNvwFUQZyq&_nc_oc=AdqOYX9-yoIPzRiQpcw4F9jU2FUEO_Vb-Mc7sqcBzaNUH9zL8xRW9UXZYrLwUJCMkOY&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=Zqya08g40BqJyz0UcG1NjQ&_nc_ss=7a30f&oh=00_AfxCsbCgPm_Sw_qndJghDQmSoyqdoCxNjox0p5atk4yRFw&oe=69C2D1AF" 
                alt="Students"
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          
          <div className="w-full lg:pl-[380px] flex flex-col gap-4 z-10 relative">
            {courseItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center h-12 md:h-16 group  transition-all duration-300 hover:-translate-y-1 hover:translate-x-2 ${item.ml}`}
              >
               
                <div className={`absolute left-[-25px] w-12 h-12 md:w-16 md:h-16 rounded-full border-[5px] ${item.color} bg-white z-40 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                  <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${item.dot}`}></div>
                </div>

                <div className={`w-full h-full flex justify-between items-center border-[4px] ${item.color} rounded-r-full pr-10 bg-white shadow-sm transition-all duration-300 group-hover:brightness-110 group-hover:shadow-2xl ${item.shadow} ${item.pl}`}>
                  <span className="text-[10px] md:text-[18px] font-black text-gray-800 uppercase leading-none whitespace-nowrap tracking-tight">
                    {item.title}
                  </span>
                  
                 
                  <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 border-[3px] border-black rounded-full flex items-center justify-center bg-white ml-4 transition-transform duration-500 group-hover:rotate-[360deg]">
                  <span className="font-black text-3xl">✓</span>
        </div>

                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;