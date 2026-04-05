import { data } from "autoprefixer";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

function Login() {
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://school-management-11-main-oxrub0.laravel.cloud/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );

      const data = await res.json();
      if (res.ok) {
        console.log("Login Success:", data);
        localStorage.setItem("token", data.token);
        // alert("Login Success");
        navigate("/");
      } else {
        console.log("Login failed:", data);
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error", error);
      alert("Something went Wrong!!!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-xl ">
        {/* Header */}
        <div className=" flex flex-col  items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s"
            alt=""
            className=" w-25"
          />
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
            Login
          </h1>
          <p className="text-center text-gray-500 text-sm sm:text-base mb-6">
            Access your dashboard
          </p>
        </div>
        {/* Form */}
        <form className="space-y-3" onSubmit={handlelogin}>
          {/* Email */}
          <p className=" text-md">Email or Username</p>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="email"
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2"
            />
            <input
              type="email"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 sm:h-12 pl-10 pr-4 border border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className=" flex justify-between items-center">
            <p className=" text-md">Password</p>
            <button
              type="button"
              onClick={() => navigate("/verify-otp")}
              className="text-md text-blue-500 hover:underline sm:text-sm">
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
              alt="lock"
              className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2"
            />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-11 sm:h-12 pl-10 pr-6 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors"></button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:bg-blue-300 transition">
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="flex items-center gap-2 mt-1">
            <input
              type="checkbox"
              id="rememberMe"
              checked={keepMeLoggedIn}
              onChange={(e) => setKeepMeLoggedIn(e.target.checked)}
              className="w-4 h-4 cursor-pointer accent-blue-600"
            />
            <label
              htmlFor="rememberMe"
              className="text-blue-500 text-sm font-medium cursor-pointer select-none hover:underline">
              Keep me logged in
            </label>
          </div>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3">
          <button className="w-full h-11 sm:h-12 flex items-center cursor-pointer justify-center gap-2 border border-gray-300 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          <div className="flex justify-center text-sm mt-4">
            <span>Don't have account?</span>
            <Link
              to="/register"
              className="text-blue-500 ml-1 cursor-pointer hover:underline">
              {" "}
              Register account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
