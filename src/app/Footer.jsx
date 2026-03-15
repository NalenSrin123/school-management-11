import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 pt-14 pb-6 text-gray-700">
      <div className="max-w-7xl mx-auto px-6">

       
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          
          <div className="lg:w-1/3">
          <div className="flex">
            <img src="/ETEC.jpg" className="w-9 h-8" alt="" />  
             <span className="text-yellow-500 font-bold text-2xl">ETEC <span className="text-blue-500">CENTER</span></span>
          </div>
            <p className="mb-3 leading-relaxed">
              St 160, Phnom Penh Cambodia
            </p>
            <p className="mb-1">
              <strong>Phone:</strong> 077 358 884
            </p>
            <p className="mb-4">
              <strong>Email:</strong> etec@gmail.com
            </p>

            <div className="flex gap-3 mt-4">
              <img src="https://thumbs.dreamstime.com/b/facebook-logo-vector-eps-file-squared-coloured-easily-editable-have-white-background-high-resolution-255557233.jpg" alt="" className="w-9 h-9 border rounded-full p-2 hover:scale-110 transition" />
              <img src="https://yt3.googleusercontent.com/i6KNxiy3gME-BulL4WnuGkTGqHuSYF8jl1WRn0rXftcJdSYK7dHKcJ3gLAaPc-KfhmLSYPwf824=s900-c-k-c0x00ffffff-no-rj" alt="" className="w-9 h-9 border rounded-full p-2 hover:scale-110 transition" />
              <img src="https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_1280.png" alt="" className="w-9 h-9 border rounded-full p-2 hover:scale-110 transition" />
              <img src="https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png" alt="" className="w-9 h-9 border rounded-full p-2 hover:scale-110 transition" />
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            <div>
              <h3 className="font-bold text-lg mb-4">Useful Link</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About us</li>
                <li>Service</li>
                <li>Contact</li>
                <li>Privacy policy</li>
              </ul>
            </div>

           
            <div>
              <h3 className="font-bold text-lg mb-4">Our Service</h3>
              <ul className="space-y-2">
                <li>Technical Support</li>
                <li>Infrastructure Service</li>
                <li>Software Service</li>
                <li>Data Service</li>
                <li>Mobile App Service</li>
              </ul>
            </div>

            
            <div>
              <h3 className="font-bold text-lg mb-4">Our Courses</h3>
              <ul className="space-y-2">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Project Management</li>
                <li>UX/UI Design</li>
                <li>Database Management</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Download App</h3>
              <div className="space-y-3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="" className="w-36" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png" alt="" className="w-36" />
                <img src="https://get.microsoft.com/images/en-us%20dark.svg" alt="" className="w-36" />
              </div>
            </div>

          </div>
        </div>

       
        <div className="border-t mt-12 pt-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              ©Copyright <span className="font-bold">ETEC CENTER</span> All Rights Reserved <br />
              Designed by <span className="text-blue-600">G.F.I group</span>
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm">We accept:</span>
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" alt="" className="h-8" />
              <img src="https://www.isportcambodia.com/filelibrary/image/khqr.png" alt="" className="h-8" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;