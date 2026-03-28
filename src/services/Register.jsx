import { useState } from 'react'
import { FaGraduationCap, FaUserAlt } from 'react-icons/fa';
import google_logo from '../assets/images/google_logo.webp';
import microsoft_logo from '../assets/images/microsoft_logo.webp';
import background_regsiter from '../assets/images/background_regsiter.webp'
import logo_etec from '../assets/images/logo_etec.png'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from "react-router-dom";
  const Register = () => {
    const [password,setPassword]=useState("")
  const [error,setError]=useState("")
  //validate password real time
  const validatePasswird=(value)=>{
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regex.test(value)){
      setError("Password must be at least 8 characters and include letters and numbers")
    }else{
      setError("")
    }
    if(value==""){
      setError("")
    }
  }

  const onChange=(e)=>{
    let value=e.target.value;
    setPassword(value)
    validatePasswird(value)
  }


  return (
    <div className='flex justify-center items-center mt-5'>
        <div className='max-w-4xl h-[670px] md:border flex justify-content-center items-center'>
          <div className='w-[50%] hidden h-full bg-cover md:flex md:px-14 items-center' style={{backgroundImage: `url(${background_regsiter})`}}>
            <div>
                <div className='flex items-center gap-1'>
                  <img className='w-16' src={logo_etec} alt="" />
                  <p className='text-white text-3xl font-bold'><span className='text-yellow-400'>ETEC</span> <span className='text-blue-600'>CENTER</span></p>
                </div>
                <h3 className='text-white font-extrabold text-3xl mt-3 leading-10'>Empowering the next generation of educators</h3>
                <p className='text-white mt-2'>&quot;<i>Education is the most powerful weapon which you can use to change the world.</i>&quot;</p>
                <div className="flex items-center space-x-6 text-white mt-3">
                  <div className="flex -space-x-3">
                    <img
                      className="w-7 h-7 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/40?img=1"
                      alt="avatar1"
                    />
                    <img
                      className="w-7 h-7 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/40?img=2"
                      alt="avatar2"
                    />
                    <img
                      className="w-7 h-7 rounded-full border-2 border-white"
                      src="https://i.pravatar.cc/40?img=3"
                      alt="avatar3"
                    />
                  </div>
                  <p className="text-gray-300 text-xs">
                    Joined by <span className="font-semibold text-white">10,000+</span> academic institutions worldwide
                  </p>
                </div>
            </div>
          </div>


          <div className='md:w-[50%] w-full h-full flex items-center px-8 md:px-14'>
            <div className='w-full'>
              <h4 className='text-2xl font-bold'>Create an Account</h4>
              <div className='text-xs flex items-center mt-2 gap-2'>
                <span>Already have account?</span>
                <Link to="/login" className="text-blue-500 underline text-[15px]">Login</Link>
              </div>
              <div className='mt-5 flex justify-center gap-5'>
                <a className='px-10 py-1 rounded-md flex j items-center  gap-2 border-gray-300 border-2' href="#">
                  <img src={google_logo} alt="google_log" className='w-5 h-5 rounded-full' />
                  <span>Google</span>
                </a>
                {/* <a className='px-10 py-1 rounded-md flex justify-center items-center border-gray-300 gap-2 border-2' href="#">
                  <img src={microsoft_logo} alt="microsotf_logo" className='w-4 h-4' />
                  <span>Microsoft</span>
                </a> */}
              </div>
              <div className='my-6 flex items-center gap-2'>
                  <div className=" border grow border-gray-300"></div>
                  <span>Or sign up with</span>
                  <div className=" border grow border-gray-300"></div>
                <hr />
              </div>
              <form action="">
                <div className='mb-3'>
                  <label htmlFor="username" className='text-xs font-bold'>Username</label>
                  <div className='relative w-full'>
                    <FaUserAlt className='absolute top-4 left-3 text-gray-500 text-xs' />
                    <input type="text" name="username" id="username" className='w-full h-full rounded-md mt-1 outline-0 border-2 px-8 text-sm text-gray-500 border-gray-300 py-2' placeholder='jonhdoe123' />
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor="email" className='text-xs font-bold'>Email</label>
                  <div className='relative w-full'>
                    <MdEmail className='absolute top-4 left-3 text-gray-500 text-sm' />
                    <input type="email" name="email" id="email" className='w-full h-full rounded-md mt-1 outline-0 border-2 px-8 text-sm text-gray-500 border-gray-300 py-2' placeholder='jonh@shool.edu' />
                  </div>
                </div>
                <div className='mb-3'>
                  <label htmlFor="password" className='text-xs font-bold'>Password</label>
                  <div className='relative w-full'>
                    <RiLockPasswordFill className='absolute top-4 left-3 text-gray-500 text-sm' />
                    <input 
                    onChange={onChange}
                    value={password}
                    type="password" 
                    name="password" 
                    id="password" 
                    className='w-full h-full rounded-md mt-1 outline-0 border-2 px-8 text-sm text-gray-500 border-gray-300 py-2' 
                    placeholder='***********'/>
                    <span className='text-xs text-gray-400'>{error}</span>
                  </div>
                </div>
                <div className='mb-3 flex items-center gap-1'>
                  <input type="checkbox" placeholder='jonh@shool.edu' />
                  <label htmlFor="email" className='text-xs'>I agree to the <span className='text-blue-500'>term of service</span> and <span className='text-blue-500'>Privacy Policy</span></label>
                </div>

                {/* button register */}
                <button className='w-full rounded-md text-white text-xs font-bold bg-blue-500 py-3 mt-2'>Create Account</button>
                <hr className='mt-5 text-gray-400' />
                <div className='w-full flex flex-col items-center mt-3'>
                  <span className='uppercase block text-xs font-bold mt-3 text-gray-400'>etec computer center</span>
                  <span className="text-center block text-xs text-gray-500 mt-2">
                  © {new Date().getFullYear()} <span className='uppercase'>etec computer center</span>. All rights reserved.
                  </span>
                </div>

              </form>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Register