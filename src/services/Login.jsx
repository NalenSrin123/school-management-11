import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-xl ">

                {/* Header */}
                <div className=" flex flex-col  items-center justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s" alt="" className=" w-25" />
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">Login</h1>
                    <p className="text-center text-gray-500 text-sm sm:text-base mb-6">Access your dashboard</p>
                </div>
                {/* Form */}
                <form className="space-y-4">

                    {/* Email */}
                    <div className="relative">
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="email" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="email" placeholder="Email or Username" className="w-full h-11 sm:h-12 pl-10 pr-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">

                        <img src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock" className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2"
                        />

                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full h-11 sm:h-12 pl-10 pr-10 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
                        >
                           
                        </button>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full h-11 sm:h-12 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                    <div>
                        <div className="flex gap-2">
                        <input type="checkbox" name="" id=""  />
                        <p className=" text-blue-500 text-md">Keep me login</p>
                        </div>
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
                    <button className="w-full h-11 sm:h-12 flex items-center justify-center gap-2 border rounded-xl shadow-md hover:shadow-lg transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="google" className="w-5 h-5" />
                        Continue with Google
                    </button>

                    <button className="w-full h-11 sm:h-12 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="facebook" className="w-5 h-5" />
                        Continue with Facebook
                    </button>

                    <button className="w-full h-11 sm:h-12 flex items-center justify-center gap-2 bg-black text-white rounded-xl shadow-md hover:bg-gray-800 transition">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github" className="w-5 h-5" />
                        Continue with Github
                    </button>
                    <div className="flex items-center justify-center cursor-pointer ">
                        <h1>Don't have account ?</h1>
                        <p className="text-blue-500">Register your account </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;
