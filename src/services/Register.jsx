import { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo_etec from '../assets/images/logo_etec.png';
import background_register from '../assets/images/background_regsiter.webp';
import google_logo from '../assets/images/google_logo.webp';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const BASE_URL = "https://school-management-11-main-oxrub0.laravel.cloud/api";

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (value !== "" && !regex.test(value)) {
      setError("Password must be at least 8 characters and include letters and numbers");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const onChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    if (!validatePassword(password)) return;

    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username, email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        alert("User registered successfully!");
        setUsername("");
        setEmail("");
        setPassword("");
        setError("");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="max-w-4xl h-[670px] md:border flex">
        
        {/* Left Side - image */}
        <div
          className="w-[50%] hidden md:flex h-full bg-cover px-14 items-center"
          style={{ backgroundImage: `url(${background_register})` }}
        >
          <div>
            <div className="flex items-center gap-1">
              <img className="w-16" src={logo_etec} alt="logo" />
              <p className="text-white text-3xl font-bold">
                <span className="text-yellow-400">ETEC</span>{" "}
                <span className="text-blue-600">CENTER</span>
              </p>
            </div>
            <h3 className="text-white font-extrabold text-3xl mt-3 leading-10">
              Empowering the next generation of educators
            </h3>
            <p className="text-white mt-2 italic">
              "Education is the most powerful weapon which you can use to change the world."
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-[50%] w-full h-full flex items-center px-8 md:px-14">
          <div className="w-full">
            <h4 className="text-2xl font-bold">Create an Account</h4>
            <div className="text-xs flex items-center mt-2 gap-2">
              <span>Already have account?</span>
              <Link to="/login" className="text-blue-500 underline text-[15px]">Login</Link>
            </div>

            <form onSubmit={handleSubmit} className="mt-5">
              <div className="mb-3">
                <label className="text-xs font-bold">Username</label>
                <div className="relative w-full">
                  <FaUserAlt className="absolute top-4 left-3 text-gray-500 text-xs" />
                  <input
                    type="text"
                    placeholder="johndoe123"
                    className="w-full rounded-md mt-1 outline-0 border-2 px-8 text-sm text-gray-500 border-gray-300 py-2"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-xs font-bold">Email</label>
                <div className="relative w-full">
                  <MdEmail className="absolute top-4 left-3 text-gray-500 text-sm" />
                  <input
                    type="email"
                    placeholder="johndoe@school.edu"
                    className="w-full rounded-md mt-1 outline-0 border-2 px-8 text-sm text-gray-500 border-gray-300 py-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-xs font-bold">Password</label>
                <div className="relative w-full">
                  <RiLockPasswordFill className="absolute top-4 left-3 text-gray-500 text-sm" />
                  <input
                    type="password"
                    placeholder="***********"
                    className="w-full rounded-md mt-1 outline-0 border-2 px-8 text-sm text-gray-500 border-gray-300 py-2"
                    value={password}
                    onChange={onChangePassword}
                  />
                  {error && <p className="text-[10px] text-red-500 mt-1">{error}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full rounded-md text-white text-xs font-bold py-3 mt-2 ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}
              >
                {loading ? "Registering..." : "Create Account"}
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register;