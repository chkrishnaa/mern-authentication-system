import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { leftImageVariants, rightFormVariants } from "../utils/helper";

const VerifyEmail = () => {
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
        className="flex justify-center items-center p-6 col-span-2 bg-gradient-to-br from-white to-violet-300"
      >
        <form className="md:w-96 w-80 flex flex-col items-center justify-center space-y-4">
          <h2 className="text-4xl text-gray-900 font-medium">
            Email Verification
          </h2>
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm text-gray-500/90">
              Enter a 6-digit verification code sent to your email.
            </p>
            <p className="text-sm text-red-500/90">OTP valid for 10 minutes.</p>
          </div>

          <div className="flex justify-between w-full">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    className="flex items-center justify-center h-12 w-12 rounded-lg bg-transparent text-gray-600 outline-none text-sm text-center border-gray-300/60 bg-white px-4 gap-3"
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
}

export default VerifyEmail
