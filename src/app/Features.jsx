import React from 'react';

 function Features() {
  return (

    <div className="w-full min-h-screen bg-gray-50 py-10 px-4">
    
       <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold ">
          Features of <span className="text-orange-500">ETEC</span>{" "}
          <span className="text-blue-600">CENTER</span>
        </h1>

        <p className="text-gray-600 mt-4 leading-relaxed">
          At etec center IT, we believe in providing a comprehensive and 
          engaging learning experience to help students develop the technical
          skills necessary for success in today's fast-paced digital world.
          Our features are designed to support both beginners and professionals
          looking to enhance their IT knowledge and skills.

        </p>


        <div className="flex flex-wrap justify-center gap-4 mt-8 bg-orange-400 p-3 rounded-full shadow-md">
          <button className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium transition duration-300 hover:bg-white hover:text-blue-600">
            Expert Instructors
          </button>

          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-medium transition duration-300 hover:bg-blue-600 hover:text-white">
            Comprehensive Curriculum 
          </button>

          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-medium transition duration-300 hover:bg-blue-600 hover:text-white">
            Career Support Services
          </button>

          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-700 font-medium transition duration-300 hover:bg-blue-600 hover:text-white">
            Certification and Recognition
          </button>

        </div>
       </div>

       <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            Expert Instructors
          </h2>

          <p className="text-gray-600 mt-4">
            Our Instructor are highly experience professionals with deep 
            Knowledge in various IT fields. They bring real-world industry
            experience into the classroom, providing students with practical
            insights and guidance to successed.
          </p>

          <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
            <li>Real-world experience in software development and web.</li>
            <li>Highly qualified with strong academic background.</li>
            <li>Focused on practical teaching, not just theory.</li>
            <li>Skilled in technical instructor and soft skills mentoring.</li>
            <li>Supportive and committed to student success.</li>

          </ul>
        </div>

        <div className="flex justify-center">
          <img  
          src="https://i.pinimg.com/1200x/d3/57/f2/d357f2c46b1172f856ef63d8143d836b.jpg" alt=""
          className="w-80"
          />

        </div>
       </div>
    </div>
 
  );
}

export default Features;
