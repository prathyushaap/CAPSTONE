import React from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaLaptopCode, FaCogs, FaFlask, FaNetworkWired, FaMicroscope, FaPaintBrush } from "react-icons/fa";

// Example department data
const departments = [
  { name: "Computer Science", icon: <FaLaptopCode /> },
  { name: "Mechanical", icon: <FaCogs /> },
  { name: "Chemical", icon: <FaFlask /> },
  { name: "Electronics", icon: <FaNetworkWired /> },
  { name: "Biotechnology", icon: <FaMicroscope /> },
  { name: "Design", icon: <FaPaintBrush /> },
];

const AllDepartments = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gray-100 py-8 sm:py-10 px-4 sm:px-6 lg:px-20 relative">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white p-2 sm:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        <FiArrowLeft className="text-purple-600 text-lg sm:text-xl" />
      </button>

      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 text-center mb-8 sm:mb-12 mt-8">
        All Departments
      </h1>

      {/* Departments Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-3xl shadow-lg p-4 sm:p-6 flex flex-col items-center justify-center gap-3 sm:gap-4 hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="text-purple-400 text-4xl sm:text-5xl md:text-6xl">
              {dept.icon}
            </div>
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 text-center">
              {dept.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDepartments;
