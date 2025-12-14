import React from 'react'
import {useNavigate} from 'react-router-dom'

import { SiSecurityscorecard } from "react-icons/si";
import { GrFormNextLink } from "react-icons/gr";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {

  const {userData, backendUrl,setUserData, setIsLoggedIn} = useContext(AppContext);
  const navigate=useNavigate();

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials=true;
      const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`);
      if (data.success) {
        toast.success(data.message);
        navigate("/verify-email");
      }else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const logout = async () => {
    try {
      axios.defaults.withCredentials=true;
      const { data } = await axios.post(`${backendUrl}/api/auth/logout`);
      if (data.success) {
        setIsLoggedIn(false);
        setUserData(false);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-cyan-400 shadow-[0_4px_10px_rgba(34,211,238,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <SiSecurityscorecard size={40} className="text-blue-300" />
            <h1 className="text-2xl font-bold text-gray-100 italic">
              AuthZen2.0
            </h1>
          </div>

          {userData ? (
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 p-2 rounded-lg text-white relative group">
              {userData.name[0].toUpperCase()}
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                <ul className="list-none m-0 p-2 bg-cyan-200 text-sm font-semibold">
                  {!userData.isAccountVerified && (
                    <li onClick={sendVerificationOtp} className="py-1 px-2 hover:bg-cyan-300 text-white cursor-pointer">
                      Verify Email
                    </li>
                  )}
                  <li onClick={logout} className="py-1 px-2 hover:bg-red-200 text-red-500 cursor-pointer">
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-lg"
            >
              <span className="text-white"> Login</span>{" "}
              <GrFormNextLink size={20} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </nav>
  );

}

export default Navbar
