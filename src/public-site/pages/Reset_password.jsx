import React from "react";
import { IoLogoBuffer } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdError } from "react-icons/md";

function Reset_password() {
  return (
    <div className="flex justify-center items-center  h-screen ">
      <div className="w-150 bg-white shadow-md shadow-gray-400  h-154 flex flex-col rounded-xl ">
        <div className="py-5 px-10">
          <div className="flex justify-center">
            <img
              src="src\assets\images\etec center.png"
              className="w-20"
              alt=""
            />
          </div>
          {/* Title */}
          <div className="flex flex-col items-center ">
            <h1 className="font-bold text-">ETEC CENTER</h1>
            <h1 className="font-bold mt-3 text-lg">Reset Your Password</h1>
          </div>
          {/* description */}
          <div className="mt-3">
            <p>
              Hi <span className="font-bold">[User Name]</span>.
            </p>
            <p className="mt-3 text-sm">
              We received a request to reset the password for your Enterprise
              School Management System account. If you didn’t make this request,
              you can safely ignore this email. No changes will be made to your
              account.
            </p>
          </div>

          {/* Button reset_password */}
          <div className="flex justify-center  w-full mt-5 ">
            <button className="flex justify-center items-center gap-2 bg-blue-700 text-white rounded-md py-2 px-7 text-sm font-bold hover:shadow-blue-400 hover:shadow-md hover:scale-105 transform transition">
              Reset Password <FaArrowRightLong className="text-sm" />
            </button>
          </div>

          <div className="bg-blue-50 w-full  rounded-lg mt-6">
            <p className="text-xs p-2">
              If the button above doesn’t work, copy and paste this link into
              your browser :
              <span className="text-blue-500">
                {" "}
                https://eduflow-systems.com/auth/reset-password?token=8k2j3h45k6j7h8g9f0d1s2a3p4o5i6u7y8t9r0e
              </span>
            </p>
          </div>

          <div className="bg-amber-50 w-full rounded-lg mt-5">
            <p className="text-xs p-2 text-red-700 flex gap-2">
              <MdError className="text-xl" />
              For your security: This link will expire in 2 hours. After that,
              you’ll need to submit a new request.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center mt-2 bg-gray-50 rounded-b-xl ">
            <p className="text-xs p-2">
              Need help? Contact our support team at{" "}
              <span className="text-blue-500">support@eteccenter.com</span>
            </p>
            <p className="text-xs mt-5">ETEC CENTER INC.</p>
            <p className="text-xs mt-1">Street 160, Toul Kork District</p>
            <p className="text-xs mt-1 mb-3">Phnom Penh, Cambodia</p>
        </div>
      </div>
    </div>
  );
}

export default Reset_password;
