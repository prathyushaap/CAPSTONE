import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import bgImage from "../assets/images/bgImage.webp"; // Replace with your hero image

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex flex-col relative">

      {/* Hero Section */}
      <section
        className="flex items-center justify-center h-[350px] sm:h-[400px] md:h-[500px] text-center text-white relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Back Arrow */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-5 z-10 left-5 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <IoArrowBackOutline size={20} className="sm:size-5" />
        </button>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
        <div className="relative z-10 max-w-2xl p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            About CAPSTONE
          </h1>
          <p className="text-sm sm:text-base md:text-lg">
            Empowering students and educators to transform ideas into real-world
            projects with innovation, learning, and collaboration.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-20 bg-gray-50 flex flex-col gap-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-purple-600 text-center">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
              CAPSTONE is dedicated to equipping students with the knowledge, tools,
              and support to complete impactful projects. We aim to bridge the gap
              between theory and real-world application, fostering creativity,
              innovation, and problem-solving skills.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-300">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center">
              We envision a world where students confidently turn ideas into reality,
              collaborate effectively, and positively impact society. Innovation and
              knowledge guide us to create a thriving, supportive community for all learners.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Fact / Highlight Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-20 bg-white text-gray-800 flex flex-col items-center gap-8 sm:gap-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-6 text-center">
          Why Choose CAPSTONE?
        </h2>
        <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Innovative Learning</h3>
            <p className="text-sm sm:text-base">Hands-on projects that turn ideas into real-world solutions.</p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Collaboration</h3>
            <p className="text-sm sm:text-base">Work together with peers and mentors to achieve excellence.</p>
          </div>
          <div className="p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Supportive Community</h3>
            <p className="text-sm sm:text-base">Grow in a nurturing environment that values creativity and innovation.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
