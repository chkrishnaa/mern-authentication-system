import React from 'react'
import { motion } from "framer-motion";
import { SiSecurityscorecard } from "react-icons/si";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const {userData} = useContext(AppContext);
  return (
    <section className="min-h-screen flex items-center justify-center max-w-6xl mx-auto px-2">
      {/* Glass Card */}
      <div className="relative max-w-3xl w-full rounded-xl overflow-hidden h-100">
        {/* Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-2xl rounded-xl"></div>

        {/* Content */}
        <div className="relative z-10 text-center py-4 sm:py-8 px-8">
          <div className="flex justify-center mb-4 sm:mb-8">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                display: "inline-block",
                transformOrigin: "center center",
              }}
            >
              <motion.div
                animate={{
                  color: ["#ffffff", "#27BFC7", "#ffffff"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ color: "#ffffff" }}
              >
                <SiSecurityscorecard
                  size={80}
                  style={{ color: "currentColor" }}
                />
              </motion.div>
            </motion.div>
          </div>

          <h className="text-2xl md:text-3xl font-bold text-white mb-3">
            Welcome {userData? userData.name : "Coder"} !!!
          </h>
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-300">
            Welcome to AuthZen2.0 !
          </h1>
          <p className="mt-4 text-base text-white">
            Let's get started with our quick process. Secure your account with
            modern authentication methods. Fast, safe, and designed for the
            future.
          </p>

          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-2 rounded-lg mt-4 sm:mt-8 text-white">
            Get Strated
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;


