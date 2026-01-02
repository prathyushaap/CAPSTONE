import React, { useEffect, useState, useRef, useContext } from "react";
import bgImage from "../assets/images/bgImage.webp";
import { motion, useAnimation } from "framer-motion";
import { DEPARTMENTS } from "../constants/ProgramData";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";

const LandingPage = () => {
  const { searchTerm } = useContext(SearchContext);
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const filteredDepartments = DEPARTMENTS.filter((dept) =>
    dept.departmentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= filteredDepartments.length ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredDepartments.length]);

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}%`,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentIndex, controls]);

  const handleDepartmentClick = (name) => {
    navigate(`/departmentprojects/${encodeURIComponent(name)}`);
  };

  return (
    <div
      className="flex items-center justify-center w-full py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <h1 className="text-xl font-semibold mb-6">Browse by Department</h1>

        {filteredDepartments.length === 0 && (
          <p className="text-center text-gray-500">No departments found</p>
        )}

        {/* Mobile Slider */}
        <div className="md:hidden overflow-hidden">
          <motion.div className="flex" animate={controls}>
            {filteredDepartments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div
                  key={index}
                  onClick={() => handleDepartmentClick(dept.departmentName)}
                  className="min-w-full h-[200px] bg-[#e6e6ef] rounded-2xl flex flex-col items-center justify-center cursor-pointer"
                >
                  <Icon className="text-3xl mb-2" />
                  <p className="text-sm font-semibold">{dept.departmentName}</p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredDepartments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={index}
                onClick={() => handleDepartmentClick(dept.departmentName)}
                className="h-[200px] bg-[#e6e6ef] rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition"
              >
                <Icon className="text-3xl mb-2" />
                <p className="text-sm font-semibold text-center">
                  {dept.departmentName}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
