import React from 'react'
import {useNavigate} from 'react-router-dom'

import { SiSecurityscorecard } from "react-icons/si";
import { GrFormNextLink } from "react-icons/gr";





const Navbar = () => {
  const navigate=useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-cyan-400 shadow-[0_4px_10px_rgba(34,211,238,0.6)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <SiSecurityscorecard size={40} className="text-blue-300" />
            <h1 className="text-2xl font-bold text-gray-100 italic">AuthZen2.0</h1>
          </div>

          <button 
          onClick={()=>navigate("/login")}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-full">
            <span className="text-white"> Login</span>{" "}
            <GrFormNextLink size={20} className="text-white" />
          </button>
        </div>
      </div>
    </nav>
  );

}

export default Navbar
