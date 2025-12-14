import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from 'framer-motion'
import { leftImageVariants, rightFormVariants } from '../utils/helper';
import {toast} from 'react-toastify';
import axios from "axios";
import { AppContext } from "../context/AppContext";


export const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {backendUrl, setIsLoggedIn, getUserData} = useContext(AppContext);

const navigate=useNavigate();

const handleSubmit = async (e) => {
  try {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    const { data } = await axios.post(`${backendUrl}/api/auth/login`, {
      email,
      password,
    });

    if (data.success) {
      setIsLoggedIn(true);
      getUserData();
      navigate("/");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
      toast.error(error.message);
  }
}

  return (
    <div className="grid sm:grid-cols-2 h-screen overflow-hidden bg-gradient-to-br from-white to-violet-200">
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
        className="flex justify-center items-center p-6"
      >
        <form onSubmit={handleSubmit} className="md:w-96 w-80 flex flex-col items-center justify-center">
          <h2 className="text-4xl text-gray-900 font-medium">Sign in</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Welcome back! Please sign in to continue
          </p>

          <div className="flex justify-between w-full space-x-4">
            <button
              type="button"
              className="flex justify-center items-center space-x-2 bg-violet-300/30 hover:bg-violet-300/60 w-full mt-8 h-12 rounded-lg text-gray-500/90"
            >
              <img src="/Google.png" alt="googleLogo" className="w-6 h-6" />
              <span>Google</span>
            </button>

            <button
              type="button"
              className="flex justify-center items-center space-x-3 bg-blue-500 hover:bg-blue-600 w-full mt-8 h-12 rounded-lg text-white"
            >
              <FaFacebook size={20} className="text-white" />
              <span>Facebook</span>
            </button>
          </div>

          <div className="flex items-center gap-4 w-full my-5">
            <div className="w-full h-px bg-gray-300/90"></div>
            <p className="w-full text-nowrap text-sm text-gray-500/90">
              or sign in with email
            </p>
            <div className="w-full h-px bg-gray-300/90"></div>
          </div>

          <div className="flex flex-col w-full space-y-3">
            <div className="flex items-center w-full h-12 rounded-lg border border-gray-300/60 bg-white px-4 gap-3">
              <FaEnvelope size={18} className="text-gray-500/80" />

              <input
                type="email"
                placeholder="Email id"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>

            <div className="flex items-center w-full h-12 rounded-lg border border-gray-300/60 bg-white px-4 gap-3">
              <FaLock size={18} className="text-gray-500/80" />

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 outline-none text-sm"
                required
              />
            </div>
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>
            <a className="text-sm underline" onClick={() => navigate('/reset-password')}>
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-lg text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-indigo-400 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};
