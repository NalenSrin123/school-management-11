import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdError } from "react-icons/md";

function Reset_password() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md shadow-gray-300 w-full max-w-md rounded-xl overflow-hidden">
        
        {/* Body */}
        <div className="py-6 px-6 sm:px-10">
          
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src="src/assets/images/etec center.png"
              className="w-16 sm:w-20"
              alt="ETEC Center Logo"
            />
          </div>

          {/* Title */}
          <div className="flex flex-col items-center mb-4">
            <h1 className="font-bold text-sm tracking-widest text-gray-700">ETEC CENTER</h1>
            <h1 className="font-bold mt-2 text-lg sm:text-xl">Reset Your Password</h1>
          </div>

          <hr className="border-gray-200 mb-4" />

          {/* Description */}
          <p className="text-sm sm:text-base">
            Hi <span className="font-bold">[User Name]</span>,
          </p>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            We received a request to reset the password for your Enterprise
            School Management System account. If you didn't make this request,
            you can safely ignore this email. No changes will be made to your
            account.
          </p>

          {/* Button */}
          <div className="flex justify-center w-full mt-6">
            <button className="flex justify-center items-center gap-2 bg-blue-700 text-white rounded-md py-2.5 px-8 text-sm font-bold hover:shadow-blue-400 hover:shadow-md hover:scale-105 transform transition w-full sm:w-auto">
              Reset Password <FaArrowRightLong />
            </button>
          </div>

          {/* Link fallback */}
          <div className="bg-blue-50 w-full rounded-lg mt-6 p-3">
            <p className="text-xs leading-relaxed break-all">
              If the button above doesn't work, copy and paste this link into your browser:{" "}
              <span className="text-blue-500">
                https://eduflow-systems.com/auth/reset-password?token=8k2j3h45k6j7h8g9f0d1s2a3p4o5i6u7y8t9r0e
              </span>
            </p>
          </div>

          {/* Warning */}
          <div className="bg-amber-50 w-full rounded-lg mt-4 p-3 flex gap-2 items-start">
            <MdError className="text-red-500 text-lg flex-shrink-0 mt-0.5" />
            <p className="text-xs text-red-700">
              For your security: This link will expire in 2 hours. After that,
              you'll need to submit a new request.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center bg-gray-50 rounded-b-xl px-6 py-4 text-center">
          <p className="text-xs">
            Need help? Contact our support team at{" "}
            <span className="text-blue-500">support@eteccenter.com</span>
          </p>
          <p className="text-xs mt-4 text-gray-500">ETEC CENTER INC.</p>
          <p className="text-xs mt-1 text-gray-500">Street 160, Toul Kork District</p>
          <p className="text-xs mt-1 mb-2 text-gray-500">Phnom Penh, Cambodia</p>
        </div>
      </div>
    </div>
  );
}

export default Reset_password;