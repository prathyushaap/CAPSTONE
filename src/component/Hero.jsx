import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-center text-sm text-white px-4 bg-[url('https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/30"></div>
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-white/20 relative z-10">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="CAPSTONE logo"
            className="h-10 w-16 object-cover rounded-lg"
          />
          <span className="text-2xl font-bold text-[#f8f7fc] font-sciencegothic">
            CAPSTONE
          </span>
        </Link>

       <Link to="/signup">
        <button className="bg-white text-slate-800 hover:bg-gray-300 px-6 md:px-8 py-2.5 rounded-full font-medium transition">
          Sign up
        </button>
       </Link>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col items-center mt-20 max-w-4xl relative z-10">
        <h1 className="font-berkshire text-[42px]/[50px] md:text-6xl/[65px]">
          A Shared Journey from Idea to Impact.
        </h1>

        <p className="text-base mt-4 max-w-xl">
          A collaborative platform where students manage their yearly projects
          with clarity and confidence.
        </p>

        <p className="text-base mt-3 max-w-xl">
          Teachers guide progress, provide feedback, and support success at every
          stage.
        </p>

        {/* Email Form */}
        <form className="flex items-center mt-10 max-w-lg h-16 w-full rounded-full border border-white/40">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full h-full bg-transparent outline-none pl-6 pr-2 text-white placeholder:text-slate-300"
          />
          <button className="bg-white text-slate-800 hover:bg-gray-300 px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition">
            Early access
          </button>
        </form>
      </div>

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Poppins:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Poppins', sans-serif;
        }

        .font-berkshire {
          font-family: 'Berkshire Swash', cursive;
        }
      `}</style>
    </section>
  );
};

export default Hero;
