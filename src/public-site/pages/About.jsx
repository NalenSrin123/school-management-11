import { useState } from "react";
import { useEffect } from "react";
export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-serif">

      {/* Hero Section */}
      <div className="text-center py-16 px-4 sm:px-6 lg:px-8 bg-blue-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
          About Us
        </h1>
        <p className="mt-2 text-base sm:text-lg text-gray-800">
          Welcome to <span className="font-semibold">ETEC CENTER</span>
        </p>
      </div>

      {/* Main Content */}
      <div
        className={`max-w-7xl mx-auto p-4 sm:p-6 mt-12 transition-all duration-700 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Left Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border">

            {/* Mission */}
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
              Our Mission 📍
            </h2>

            <hr className="my-3 border-gray-300" />

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At <span className="text-blue-700 font-semibold">ETEC CENTER</span>, 
              our mission is to equip individuals with the knowledge, skills,
              and confidence to succeed in the digital world. We are committed
              to delivering practical, high-quality IT education that bridges
              the gap between learning and real-world application.
            </p>

            {/* Vision */}
            <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2 mt-6 sm:mt-8">
              Our Vision 🎯
            </h2>

            <hr className="my-3 border-gray-300" />

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We envision a future where everyone—regardless of background—
              has the opportunity to thrive in technology. Our goal is to
              become a leading center for tech education in the region,
              inspiring innovation, creativity, and lifelong learning through
              accessible and impactful training.
            </p>

          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://uid.edu.in/wp-content/uploads/2025/05/Project-Workflow-2048x1434-1.webp"
              alt="education illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl object-contain"
            />
          </div>

        </div>
      </div>

    </div>
  );
}