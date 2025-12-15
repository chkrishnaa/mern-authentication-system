import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { leftImageVariants, rightFormVariants } from "../utils/helper";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {

  const { backendUrl } = useContext(AppContext);
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpSubmitted, setIsOtpSubmitted] = useState(false);

  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pasteArray = paste.split("");
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };


  const onSubmitEmail = async(e)=>{
    e.preventDefault();
    try{
const {data} = await axios.post(`${backendUrl}/api/auth/send-reset-otp`, {email});


if(data.success){
  toast.success(data.message);
  setIsEmailSent(true);
}else{
  toast.error(data.message);
}
    } catch(error){
      toast.error(error.message);

    }
  }

  const onSubmitOtp = async (e) =>{
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmitted(true);
  }

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/auth/reset-password`,
        { email, otp, newPassword }
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="grid sm:grid-cols-4 h-screen overflow-hidden">
      <motion.img
        variants={leftImageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="hidden sm:block h-full sm:col-span-1 object-cover"
        src="/PurpleThemedAuth.png"
        alt="leftSideImage"
      />

      <motion.div
        variants={rightFormVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex justify-center items-center p-6 col-span-2 bg-gradient-to-br from-white to-violet-300 overflow-y-auto"
      >
        {!isEmailSent && (
          <form onSubmit={onSubmitEmail} className="md:w-96 w-80 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl text-gray-900 font-medium">
              Reset Password
            </h2>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-gray-500/90">
                Enter your registered email address.
              </p>
            </div>

            <div className="flex items-center w-full h-12 rounded-lg border border-gray-300/60 bg-white px-4 gap-3">
              <FaEnvelope size={18} className="text-gray-500/80" />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        )}

        {isOtpSubmitted && isEmailSent && (
          <form onSubmit={onSubmitOtp} className="md:w-96 w-80 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl text-gray-900 font-medium">
              Email Verification
            </h2>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-gray-500/90">
                Enter a 6-digit verification code sent to your email.
              </p>
              <p className="text-sm text-red-500/90">
                OTP valid for 10 minutes.
              </p>
            </div>

            <div className="flex justify-between w-full" onPaste={handlePaste}>
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    ref={(e) => (inputRefs.current[index] = e)}
                    onInput={(e) => {
                      handleInput(e, index);
                    }}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="flex items-center justify-center h-12 w-12 rounded-lg text-gray-600 font-semibold outline-none text-center border-gray-300/60 bg-white px-4 gap-3"
                    required
                  />
                ))}
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Very Email
            </button>
          </form>
        )}

        {!isOtpSubmitted && isEmailSent && (
          <form onSubmit={onSubmitNewPassword} className="md:w-96 w-80 flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl text-gray-900 font-medium">New Password</h2>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm text-gray-500/90">
                Create your new password.
              </p>
            </div>

            <div className="flex flex-col w-full space-y-3">
              <div className="flex items-center w-full h-12 rounded-lg border border-gray-300/60 bg-white px-4 gap-3">
                <FaLock size={18} className="text-gray-500/80" />

                <input
                  type="password"
                  placeholder="Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                  required
                />
              </div>
              <div className="flex items-center w-full h-12 rounded-lg border border-gray-300/60 bg-white px-4 gap-3">
                <FaLock size={18} className="text-gray-500/80" />

                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-11 rounded-lg text-white bg-indigo-500 hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        )}
      </motion.div>
      <motion.img
        variants={leftImageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="hidden sm:block h-full sm:col-span-1 object-cover"
        src="/PurpleThemedAuth.png"
        alt="leftSideImage"
      />
    </div>
  );
};

export default ResetPassword;
