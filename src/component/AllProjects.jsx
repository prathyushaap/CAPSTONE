import React from "react";
import { FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Example data for projects
const projects = [
  { name: "Smart Traffic System", year: "2023", department: "Computer Science" },
  { name: "Solar-Powered Water Pump", year: "2022", department: "Mechanical" },
  { name: "AI Chatbot", year: "2023", department: "Computer Science" },
  { name: "Eco-Friendly Packaging", year: "2021", department: "Chemical" },
  { name: "Drone Delivery System", year: "2023", department: "Electronics" },
  { name: "Autonomous Car Simulation", year: "2022", department: "Mechanical" },
];

const AllProjects = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 sm:py-10 px-4 sm:px-6 md:px-20 relative">
      {/* Back Arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white p-2 sm:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        <FiArrowLeft className="text-purple-600 text-lg sm:text-xl" />
      </button>

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 text-center mb-8 sm:mb-12 mt-8">
        All Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition transform hover:-translate-y-1 md:hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
          >
            {/* Project Name */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">
              {project.name}
            </h2>

            {/* Project Info */}
            <div className="flex flex-col gap-2 sm:gap-3 text-gray-700">
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaCalendarAlt className="text-purple-300" />
                <span className="font-medium">Year:</span>
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <FaBuilding className="text-purple-300" />
                <span className="font-medium">Department:</span>
                <span>{project.department}</span>
              </div>
            </div>

            {/* View Project Button */}
            <button className="mt-4 sm:mt-6 w-full bg-purple-200 text-purple-800 py-2 rounded-full font-semibold shadow hover:bg-purple-300 transition text-sm sm:text-base">
              View Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
