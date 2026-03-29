import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// ==================== CONFIRM OTP PAGE ====================
const ConfirmOTPpage = ({ onBack, onClose }) => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer > 0)
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    setTimer(30);
    setOtp(new Array(6).fill(""));
    setStatus({ type: "", message: "" });
    inputRefs.current[0]?.focus();
  };

  const handleVerify = async (otpValue) => {
    const fullOtp = otpValue || otp.join("");
    if (fullOtp.length < 6) {
      setStatus({
        type: "error",
        message: "Please enter the complete 6-digit OTP code first!",
      });
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch("https://your-api-domain.com/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: fullOtp }),
      });
      if (response.ok) {
        setStatus({ type: "success", message: "Your OTP is successful." });
      } else {
        setStatus({ type: "error", message: "Invalid OTP. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Server connection error." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value !== "" && index < 5) inputRefs.current[index + 1].focus();
    if (newOtp.join("").length === 6) handleVerify(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0)
      inputRefs.current[index - 1].focus();
    if (e.key === "ArrowLeft" && index > 0)
      inputRefs.current[index - 1].focus();
    if (e.key === "ArrowRight" && index < 5)
      inputRefs.current[index + 1].focus();
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d{6}$/.test(paste)) return;
    const pasteArray = paste.split("");
    setOtp(pasteArray);
    pasteArray.forEach((num, index) => {
      if (inputRefs.current[index]) inputRefs.current[index].value = num;
    });
    inputRefs.current[5].focus();
    handleVerify(paste);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition">
            &times;
          </button>

          <div className="flex items-center justify-center mb-5">
            <div className="flex items-center justify-center w-14 h-14">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s"
                alt=""
              />
            </div>
            <h1 className="text-3xl font-bold">
              <span className="text-yellow-400 font-medium">ETEC</span>
              <span className="text-blue-700 font-medium"> CENTER</span>
            </h1>
          </div>

          <div className="flex justify-center mb-7">
            <div className="flex items-center justify-center w-20 h-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3539/3539752.png"
                alt=""
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Two-Step Verification
          </h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Enter the 6-digit code sent to your institutional <br />
            email{" "}
            <span className="font-semibold text-slate-700">
              example@etec.edu.br
            </span>
          </p>

          <div className="flex justify-between gap-2 mb-8">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                autoComplete="one-time-code"
                inputMode="numeric"
                ref={(el) => (inputRefs.current[index] = el)}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                className={`w-12 h-14 border-2 rounded-xl text-center text-xl font-bold transition-all focus:outline-none 
                ${otp[index] ? "border-blue-500 ring-2 ring-blue-50" : "border-slate-200 text-slate-700 focus:border-blue-400"}`}
              />
            ))}
          </div>

          {status.message && (
            <div
              className={`mb-4 text-sm font-semibold ${status.type === "error" ? "text-red-500" : "text-green-600"}`}>
              {status.message}
            </div>
          )}

          <button
            onClick={() => handleVerify()}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all mb-6">
            {loading ? "Verifying..." : "Verify"}
          </button>

          <div className="text-sm">
            <p className="text-slate-500 mb-3">Didn't receive the code?</p>
            <button
              onClick={handleResend}
              disabled={timer > 0}
              className={`font-semibold mr-2 ${timer > 0 ? "text-slate-400 cursor-not-allowed" : "text-blue-600 hover:underline"}`}>
              Resend code
            </button>
            <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded text-xs">
              00:{timer.toString().padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={onBack}
            className="flex text-red-400 mt-5 items-center justify-center w-full text-sm font-medium hover:text-red-500 transition-colors">
            <div className="w-4 h-4 mr-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/14024/14024938.png"
                alt=""
              />
            </div>
            Back
          </button>
        </div>

        <div className="mt-5 text-center text-[10px] text-slate-500 uppercase tracking-widest">
          <p>ETEC COMPUTER CENTER</p>
          <p className="mt-1">©2026 Etec Center. System ID: F1-168</p>
        </div>
      </div>
    </div>
  );
};

// ==================== FORGOT PASSWORD PAGE ====================
const ForgotPasswordPage = ({ onBack, onClose, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async () => {
    if (!email.trim()) {
      setStatus({ type: "error", message: "Please enter your email address." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch(
        "https://your-api-domain.com/api/forgot-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        },
      );
      if (response.ok) {
        setStatus({
          type: "success",
          message: "OTP code has been sent to your email!",
        });
        setTimeout(() => onSubmit(), 1000);
      } else {
        setStatus({
          type: "error",
          message: "Email not found. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "success",
        message: "OTP code has been sent to your email!",
      });
      setTimeout(() => onSubmit(), 1000);
    } finally {
      setLoading(false);
    }
  };
  const [active, setActive] = useState("Home");

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition">
            &times;
          </button>

          <div className="flex items-center justify-center mb-5">
            <div className="flex items-center justify-center w-14 h-14">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s"
                alt=""
              />
            </div>
            <h1 className="text-3xl font-bold">
              <span className="text-yellow-400 font-medium">ETEC</span>
              <span className="text-blue-700 font-medium"> CENTER</span>
            </h1>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6195/6195700.png"
                alt="lock"
                className="w-12 h-12"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Forgot Password?
          </h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            No worries! Enter your registered email and we'll <br />
            send you an OTP code to reset your password.
          </p>

          <div className="relative mb-5 text-left">
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5 pl-1">
              Email Address
            </label>
            <div className="relative">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="email"
                className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
              />
              <input
                type="email"
                placeholder="example@etec.edu.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="w-full h-12 pl-10 pr-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all text-slate-700"
              />
            </div>
          </div>

          {status.message && (
            <div
              className={`mb-4 text-sm font-semibold ${status.type === "error" ? "text-red-500" : "text-green-600"}`}>
              {status.message}
            </div>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all mb-5">
            {loading ? "Sending..." : "Send OTP Code"}
          </button>

          <button
            onClick={onBack}
            className="flex text-red-400 items-center justify-center w-full text-sm font-medium hover:text-red-500 transition-colors">
            <div className="w-4 h-4 mr-1">
              <img
                src="https://cdn-icons-png.flaticon.com/512/14024/14024938.png"
                alt=""
              />
            </div>
            Back to Register
          </button>
        </div>

        <div className="mt-5 text-center text-[10px] text-slate-500 uppercase tracking-widest">
          <p>ETEC COMPUTER CENTER</p>
          <p className="mt-1">©2026 Etec Center. System ID: F1-168</p>
        </div>
      </div>
    </div>
  );
};

// ==================== REGISTER MODAL ====================
function Register({ onClose, onRegisterSuccess, onForgotPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus({ type: "error", message: "Please enter a valid email." });
      return;
    }
    if (form.password.length < 6) {
      setStatus({
        type: "error",
        message: "Password must be at least 6 characters.",
      });
      return;
    }
    if (form.password !== form.confirm) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const response = await fetch("https://your-api-domain.com/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });
      if (response.ok) {
        setStatus({
          type: "success",
          message: "Account created! Sending OTP...",
        });
        setTimeout(() => onRegisterSuccess(), 1000);
      } else {
        setStatus({ type: "error", message: "Email already exists." });
      }
    } catch {
      setStatus({
        type: "success",
        message: "Account created! Sending OTP...",
      });
      setTimeout(() => onRegisterSuccess(), 1000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-xl relative">

        <button onClick={onClose} className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold transition">&times;</button>

        {/* Header តូចជាងមុន */}
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s"
            alt=""
            className="w-12 mb-1"
          />
          <h1 className="text-xl font-bold text-center">Create Account</h1>
          <p className="text-gray-500 text-xs">Join ETEC Center today</p>
        </div>

        <div className="space-y-2.5">
          {/* Full Name */}
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="user"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full h-10 pl-9 pr-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="email"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full h-10 pl-9 pr-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
              alt="lock"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full h-10 pl-9 pr-10 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
              alt="lock"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 opacity-60"
            />
            <input
              type={showConfirm ? "text" : "password"}
              name="confirm"
              placeholder="Confirm Password"
              value={form.confirm}
              onChange={handleChange}
              className="w-full h-10 pl-9 pr-10 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">
              {showConfirm ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              onClick={onForgotPassword}
              className="text-xs text-blue-500 hover:underline font-medium">
              Forgot Password?
            </button>
          </div>

          {/* Status */}
          {status.message && (
            <div
              className={`text-xs font-semibold text-center ${status.type === "error" ? "text-red-500" : "text-green-600"}`}>
              {status.message}
            </div>
          )}

          {/* Register Button */}
          <button
            onClick={onLoginSuccess}
            className="w-full h-11 sm:h-12 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            
            Login
          </button>

          <div className="flex gap-2 items-center">
            <input type="checkbox" id="keepLogin" />
            <label
              htmlFor="keepLogin"
              className="text-blue-500 text-sm cursor-pointer">
              Keep me login
            </label>
          </div>
        </div>

        {/* Divider */}
        <div className="my-3 flex items-center">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="space-y-2">
          <button className="w-full h-9 flex items-center justify-center gap-2 border rounded-xl text-sm hover:shadow-md transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="google"
              className="w-4 h-4"
            />
            Continue with Google
          </button>
          <button className="w-full h-9 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="facebook"
              className="w-4 h-4"
            />
            Continue with Facebook
          </button>
          <button className="w-full h-9 flex items-center justify-center gap-2 bg-black text-white rounded-xl text-sm hover:bg-gray-800 transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
              alt="github"
              className="w-4 h-4"
            />
            Continue with Github
          </button>
          
          <div className="flex items-center justify-center gap-1 pt-1">
            <span className="text-gray-500 text-sm">
              Already have an account?
            </span>
            <span className="text-blue-500 text-sm font-semibold cursor-pointer hover:underline">
              Login here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==================== NAVBAR ====================
const Navbar = () => {
  const [modal, setModal] = useState("idle");

  return (
    <>
      <nav className="sticky top-0 left-0 w-full z-50 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg px-4 py-2 flex items-center justify-between border border-white/20">
          <div className="flex items-center gap-2 pl-2">
            <div className="p-1 w-15 h-15 flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRerloxG_go8MpvD_FYvHwpSWb7580gwmBw&s"
                alt=""
              />
            </div>
            <h1 className="text-xl font-black tracking-tighter uppercase flex gap-1">
              <span className="text-[#FFC107]">ETEC</span>
              <span className="text-[#0D47A1]">CENTER</span>
            </h1>
          </div>

          <ul className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest">
            <Link to='/page/overview'><li className="text-[#FF9800] cursor-pointer hover:opacity-80 transition">Overview</li></Link>
            <Link to='/about'><li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition">About Us</li></Link>
            <Link to='/kruinternship'><li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition">Internship</li></Link>
            <Link to='/donate'><li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition">Donate</li></Link>
            <Link to='/coursecard'><li className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition flex items-center gap-1">
              Our Courses <span className="text-[10px]">▼</span>
            </li></Link>
            <li
              onClick={() => setModal("login")}
              className="text-[#0D47A1] cursor-pointer hover:text-blue-600 transition normal-case"
            >
              Login
            </li>
          </ul>

          <button className="bg-[#2979FF] hover:bg-blue-600 text-white px-8 py-2.5 rounded-full text-[12px] font-bold shadow-md transition-all active:scale-95">
            Enroll
          </button>
        </div>
      </nav>

      {modal === "register" && (
        <Register
          onClose={() => setModal("idle")}
          onRegisterSuccess={() => setModal("otp")}
          onForgotPassword={() => setModal("forgot")}
        />
      )}

      {modal === "forgot" && (
        <ForgotPasswordPage
          onBack={() => setModal("register")}
          onClose={() => setModal("idle")}
          onSubmit={() => setModal("otp")}
        />
      )}

      {modal === "otp" && (
        <ConfirmOTPpage
          onBack={() => setModal("forgot")}
          onClose={() => setModal("idle")}
        />
      )}
    </>
  );
};

export default Navbar;
