import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/AuthProtectionArea.png')" }}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default Home
