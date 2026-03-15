import { Clock, Facebook, Linkedin, Lock, Twitter } from "lucide-react";
import React from "react";
import logo from "../../assets/images/Etec_logo.png";
import verified from "../../assets/images/Verified_icon.png";

const Design_OTP_Page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <div className="flex justify-center">
          <img className="w-16" src={logo} alt="Etec Logo" />
          <span className="text-center text-xl py-3.5 font-bold">
            ETEC-CENTER
          </span>
        </div>
        <div className="w-full bg-white rounded-xl mx-auto shadow-md ">
          <div className="w-full flex justify-center items-center bg-blue-200/30 rounded-t-md py-8">
            <img className="w-11 h-13" src={verified} alt="" />
          </div>
          <div className="w-full text-center">
            <p className="text-2xl font-bold mt-4">Your Verification Code</p>
            <p className="px-8 sm:px-21 text-[13px] mt-2 font-medium text-gray-500">
              Please use the 6-digit code below to complete your sign-in process
              for the Enterprise School Management System.
            </p>
            <div className="flex justify-between py-7 px-10 sm:px-21">
              <div className="w-[37px] h-[47px] bg-blue-200/20 flex items-center justify-center font-bold text-blue-600 rounded-md border border-gray-300">
                <p className="text-xl">4</p>
              </div>
              <div className="w-[37px] h-[47px] bg-blue-200/20 flex items-center justify-center font-bold text-blue-600 rounded-md border border-gray-300">
                <p className="text-xl">8</p>
              </div>
              <div className="w-[37px] h-[47px] bg-blue-200/20 flex items-center justify-center font-bold text-blue-600 rounded-md border border-gray-300">
                <p className="text-xl">2</p>
              </div>
              <div className="w-[37px] h-[47px] bg-blue-200/20 flex items-center justify-center font-bold text-blue-600 rounded-md border border-gray-300">
                <p className="text-xl">9</p>
              </div>
              <div className="w-[37px] h-[47px] bg-blue-200/20 flex items-center justify-center font-bold text-blue-600 rounded-md border border-gray-300">
                <p className="text-xl">1</p>
              </div>
              <div className="w-[37px] h-[47px] bg-blue-200/20 flex items-center justify-center font-bold text-blue-600 rounded-md border border-gray-300">
                <p className="text-xl">5</p>
              </div>
            </div>
            <div className="w-[77%] md:w-[63%] bg-gray-100 mx-auto rounded-md">
              <div className="text-center flex justify-center text-[13px] py-2.5 font-medium">
                <span className="text-blue-500 mr-2 mt-1">
                  <Clock size={13} />
                </span>
                <span className="text-gray-500">
                  This code will expire in{" "}
                  <span className="text-black">10 minutes.</span>
                </span>
              </div>
            </div>
            <p className="px-9 sm:px-20 text-[10px] py-6 font-medium text-gray-400">
              If you did not request this code, please ignore this email or
              contact support if you suspect unauthorized access.
            </p>

            <div className="w-full bg-gray-100 mx-auto rounded-b-md">
              <div className="text-center flex justify-center text-[13px] py-3 font-medium">
                <span className="text-gray-500 mr-2 mt-1">
                  <Lock size={13} />
                </span>
                <span className="text-gray-400 font-medium">
                  SECURE VERIFICATION SYSTEM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-7 sm:px-12 mt-6 flex justify-between text-[13px] cursor-pointer font-medium text-gray-600">
          <p>Contact Support</p>
          <p>Privacy Policy</p>
          <p>System Status</p>
        </div>
        <div className="w-full px-29 sm:px-42 mt-4 flex justify-between cursor-pointer text-[13px] font-medium text-gray-600">
          <div className="p-1 rounded-full bg-gray-500 text-white">
            <Facebook size={16} />
          </div>
          <div className="p-1 rounded-full bg-gray-500 text-white">
            <Twitter size={16} />
          </div>
          <div className="p-1 rounded-full bg-gray-500 text-white">
            <Linkedin size={16} />
          </div>
        </div>
        <p className="px-4 sm:px-8 text-[9px] mt-5 text-center font-medium text-gray-400">
          © 2026 Etec Enterprise School Management System. All rights reserved.
          123 Education Plaza, Academic District, Tech City 79341.
        </p>
        <p className="px-4 sm:px-8 text-[9px] mt-3 text-center font-medium text-gray-400">
          You received this email because it's required for security
          verification on your account.
        </p>
      </div>
    </div>
  );
};

export default Design_OTP_Page;
