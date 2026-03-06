import { GraduationCap, Lock, Eye, CheckCircle, Circle } from "lucide-react";

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] flex flex-col items-center justify-center px-4">

      {/* Logo + Title */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h1 className="mt-3 text-xl font-bold text-gray-800">
          EduManage Enterprise
        </h1>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-bold text-gray-900">
          Reset your password
        </h2>

        <p className="text-m text-gray-600 mt-1 mb-6">
          Choose a strong password to secure your account.
        </p>

        {/* New Password */}
        <div className="mb-4">
          <label className="text-m font-medium text-gray-800">
            New Password
          </label>

          <div className="relative mt-2">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-m font-medium text-gray-800">
            Confirm Password
          </label>

          <div className="relative mt-2">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Eye className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Security Requirements */}
        <div className="bg-gray-100 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3">
            SECURITY REQUIREMENTS
          </p>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-green-600">
              <CheckCircle size={16} />
              <span>At least 8 characters</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Circle size={16} />
              <span>Special symbol</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Circle size={16} />
              <span>One uppercase letter</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Circle size={16} />
              <span>One number</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium shadow-md transition">
          Update Password
        </button>

        {/* Back */}
        <div className="text-center mt-5">
          <p className="text-m font-medium text-gray-500 cursor-pointer hover:text-gray-700">
            ← Back to Login
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-xs text-gray-400">
        <p className="tracking-widest mb-1">
          ENTERPRISE SCHOOL MANAGEMENT SYSTEM
        </p>
        <p>© 2026 EduManage. Secure Infrastructure.</p>
      </div>

    </div>
  );
}
