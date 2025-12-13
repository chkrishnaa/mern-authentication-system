import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { leftFormVariants, rightImageVariants } from '../utils/helper'

export const SignUp = () => {
  return (
    <div className="grid sm:grid-cols-2 h-screen overflow-hidden bg-gradient-to-br from-violet-200 to-white">
      <motion.div
        variants={leftFormVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex justify-center items-center p-6"
      >
        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Create your account to get started
          </p>

          <div className="flex justify-between w-full space-x-4">
            <button
              type="button"
              className="flex justify-center items-center space-x-2 bg-violet-300/30 hover:bg-violet-300/60 w-full mt-8 h-12 rounded-full text-gray-500/90"
            >
              <img src="/Google.png" alt="googleLogo" className="w-6 h-6" />
              <span>Google</span>
            </button>

            <button
              type="button"
              className="flex justify-center items-center space-x-3 bg-blue-500 hover:bg-blue-600 w-full mt-8 h-12 rounded-full text-white"
            >
              <FaFacebook size={20} className="text-white" />
              <span>Facebook</span>
            </button>
          </div>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign up with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex flex-col w-full space-y-3">
            <div className="flex items-center w-full h-12 rounded-full border border-gray-300/60 bg-white px-4 gap-3">
              <FaUser size={18} className="text-gray-500/80" />

              <input
                type="text"
                placeholder="Full name"
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center w-full h-12 rounded-full border border-gray-300/60 bg-white px-4 gap-3">
              <FaEnvelope size={18} className="text-gray-500/80" />

              <input
                type="email"
                placeholder="Email id"
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center w-full h-12 rounded-full border border-gray-300/60 bg-white px-4 gap-3">
              <FaLock size={18} className="text-gray-500/80" />

              <input
                type="password"
                placeholder="Password"
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center w-full h-12 rounded-full border border-gray-300/60 bg-white px-4 gap-3">
              <FaLock size={18} className="text-gray-500/80" />

              <input
                type="password"
                placeholder="Confirm Password"
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-start mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="terms" />
              <label className="text-sm" htmlFor="terms">
                I agree to the terms and conditions
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Sign up
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-400 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </motion.div>

      <motion.img
        variants={rightImageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="hidden sm:block h-full sm:col-span-1 object-cover"
        src="/PurpleThemedAuth.png"
        alt="rightSideImage"
      />
    </div>
  );
};
