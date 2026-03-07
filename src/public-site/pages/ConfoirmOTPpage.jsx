import React, { useState, useRef, useEffect } from 'react';
const ConfirmOTPpage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [timer, setTimer] = useState(30);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);
  const handleResend = () => {
    setTimer(30);
    setOtp(new Array(6).fill(""));
    setStatus({ type: '', message: '' });
    inputRefs.current[0]?.focus();
  };
  const handleVerify = async () => {
    const fullOtp = otp.join("");
    if (fullOtp.length < 6) {
      setStatus({ 
        type: 'error', 
        message:'Please enter the complete 6-digit OTP code first!' 
      });
      return; 
    }
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('https://your-api-domain.com/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: fullOtp }),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Your OTP is successful.' });
      } else {
        setStatus({ type: 'error', message: 'Invalid OTP. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Server connection error.' });
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    if (newOtp.join("").length === 6) {
      handleVerify();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (!/^\d{6}$/.test(paste)) return;
    const pasteArray = paste.split("");
    setOtp(pasteArray);
    pasteArray.forEach((num, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = num;
      }
    });
    inputRefs.current[5].focus();
    handleVerify();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 font-sans bg-cover bg-center">
      <div className="max-w-md w-full">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center">
          <div className="flex items-center justify-center mb-5 ">
              <div className="flex items-center justify-center w-14 h-14">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfgEsISgcMna9mdI-t_XY7o-WkAI0ctitvg&s" alt="" />
              </div>
              <h1 className="text-3xl font-bold">
                <span className="text-yellow-400 font-medium">ETEC</span> <span className="text-blue-700 font-medium">CENTER</span>
              </h1>
          </div>
          <div className="flex justify-center mb-7">
            <div className="flex items-center justify-center w-20 h-20">
              <img src="https://cdn-icons-png.flaticon.com/512/3539/3539752.png" alt="" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Two-Step Verification</h2>
          <p className="text-slate-500 text-sm mb-8 leading-relaxed">
            Enter the 6-digit code sent to your institutional <br /> 
            email <span className="font-semibold text-slate-700">example@etec.edu.br</span>
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
                ${otp[index] ? 'border-blue-500 ring-2 ring-blue-50' : 'border-slate-200 text-slate-700 focus:border-blue-400'}`}
              />
            ))}
          </div>
          {status.message && (
            <div className={`mb-4 text-sm font-semibold ${status.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
              {status.message}
            </div>
          )}
          <button 
            onClick={handleVerify}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-200 transition-all mb-6">
            {loading ? 'Verifying...' : 'Verify'}
          </button>
          <div className="text-sm">
            <p className="text-slate-500 mb-3">Didn't receive the code ?</p>
            <button 
              onClick={handleResend}
              disabled={timer > 0}
              className={`font-semibold mr-2 ${timer > 0 ? 'text-slate-400 cursor-not-allowed' : 'text-blue-600 hover:underline'}`} >
              Resend code
            </button>
            <span className="bg-slate-200 text-slate-500 px-2 py-1 rounded text-xs">
              00:{timer.toString().padStart(2, '0')}
            </span>
          </div>
          <button className="flex text-red-400 mt-5 flex items-center justify-center w-full text-sm font-medium hover:text-red-500 transition-colors">
            <div className="w-4 h-4 mr-1">
              <img src="https://cdn-icons-png.flaticon.com/512/14024/14024938.png " alt="" />
            </div>
            Back to Login
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

export default ConfirmOTPpage;