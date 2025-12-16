// import bgImage from "../assets/images/bgImage.webp";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import { DEPARTMENTS } from "../constants/ProgramData";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const controls = useAnimation();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);
//   const navigate = useNavigate();

//   // Auto slide (mobile)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % DEPARTMENTS.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   // Animate slide
//   useEffect(() => {
//     controls.start({
//       x: `-${currentIndex * 100}%`,
//       transition: { duration: 0.8, ease: "easeInOut" },
//     });
//   }, [currentIndex, controls]);

//   // Navigate to department page
//   const handleDepartmentClick = (departmentName) => {
//     navigate(`/departmentprojects/${encodeURIComponent(departmentName)}`);
//   };

//   return (
//     <div
//       className="flex items-center justify-center w-full h-full py-10"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-5">
//         <div className="flex flex-col gap-7">

//           {/* BUTTON */}
//           <button className="flex items-center justify-center bg-[#b7b0dc] w-full lg:w-[250px] h-[45px] rounded-[30px]">
//             <h1 className="text-white font-[science] text-[20px]">
//               Explore All Projectszzzz
//             </h1>
//           </button>

//           {/* ===================== BROWSE BY DEPARTMENT ===================== */}
//           <div className="flex flex-col w-full">
//             <h1 className="font-[science] text-[20px]">
//               Browse by Department
//             </h1>

//             {/* ---------- MOBILE SLIDER ---------- */}
//             <div className="md:hidden mt-8 relative w-full overflow-hidden">
//               <motion.div
//                 ref={containerRef}
//                 className="flex w-full"
//                 drag="x"
//                 dragConstraints={{
//                   left: -((DEPARTMENTS.length - 1) * window.innerWidth),
//                   right: 0,
//                 }}
//                 dragElastic={0.1}
//                 animate={controls}
//                 onDragEnd={(e, info) => {
//                   if (info.offset.x < -50 && currentIndex < DEPARTMENTS.length - 1) {
//                     setCurrentIndex((prev) => prev + 1);
//                   } else if (info.offset.x > 50 && currentIndex > 0) {
//                     setCurrentIndex((prev) => prev - 1);
//                   }
//                 }}
//               >
//                 {DEPARTMENTS.map((dept, index) => {
//                   const Icon = dept.icon;
//                   return (
//                     <div
//                       key={index}
//                       onClick={() => handleDepartmentClick(dept.departmentName)}
//                       className="shrink-0 min-w-full bg-[#e6e6ef] h-[200px] rounded-[30px] p-4
//                       flex flex-col items-center justify-center cursor-pointer
//                       hover:bg-[#dcdcf5] hover:shadow-lg hover:scale-105
//                       transition-all duration-300"
//                     >
//                       <div className="text-3xl mb-3 text-gray-700">
//                         <Icon />
//                       </div>
//                       <h3 className="text-xs font-semibold text-gray-800 text-center">
//                         {dept.departmentName}
//                       </h3>
//                     </div>
//                   );
//                 })}
//               </motion.div>

//               {/* Pagination Dots */}
//               <div className="flex justify-center mt-4 space-x-2">
//                 {DEPARTMENTS.map((_, index) => (
//                   <span
//                     key={index}
//                     onClick={() => setCurrentIndex(index)}
//                     className={`text-2xl cursor-pointer ${
//                       currentIndex === index ? "text-gray-800" : "text-gray-400"
//                     }`}
//                   >
//                     •
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* ---------- DESKTOP / TABLET GRID ---------- */}
//             <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
//               {DEPARTMENTS.map((dept, index) => {
//                 const Icon = dept.icon;
//                 return (
//                   <div
//                     key={index}
//                     onClick={() => handleDepartmentClick(dept.departmentName)}
//                     className="flex flex-col items-center justify-center
//                     bg-[#e6e6ef] h-[200px] rounded-[30px] p-4 cursor-pointer
//                     hover:bg-[#dcdcf5] hover:shadow-lg hover:scale-105
//                     transition-all duration-300"
//                   >
//                     <div className="text-3xl mb-3 text-gray-700">
//                       <Icon />
//                     </div>
//                     <h3 className="text-xs font-semibold text-gray-800 text-center">
//                       {dept.departmentName}
//                     </h3>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useEffect, useState, useRef } from "react";
import bgImage from "../assets/images/bgImage.webp";
import { motion, useAnimation } from "framer-motion";
import { DEPARTMENTS } from "../constants/ProgramData";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Auto slide for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEPARTMENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animate slider
  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}%`,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [currentIndex, controls]);

  // Navigate to department page
  const handleDepartmentClick = (departmentName) => {
    navigate(`/departmentprojects/${encodeURIComponent(departmentName)}`);
  };

  return (
    <div
      className="flex items-center justify-center w-full h-full py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-5">
        <div className="flex flex-col gap-7">

          {/* Explore Button */}
          <button className="flex items-center justify-center bg-[#b7b0dc] w-full lg:w-[250px] h-[45px] rounded-[30px]">
            <h1 className="text-white font-[science] text-[20px]">
              Explore All Projects
            </h1>
          </button>

          {/* Browse by Department */}
          <div className="flex flex-col w-full">
            <h1 className="font-[science] text-[20px]">Browse by Department</h1>

            {/* Mobile Slider */}
            <div className="md:hidden mt-8 relative w-full overflow-hidden">
              <motion.div
                ref={containerRef}
                className="flex w-full"
                drag="x"
                dragConstraints={{
                  left: -((DEPARTMENTS.length - 1) * window.innerWidth),
                  right: 0,
                }}
                dragElastic={0.1}
                animate={controls}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50 && currentIndex < DEPARTMENTS.length - 1) {
                    setCurrentIndex((prev) => prev + 1);
                  } else if (info.offset.x > 50 && currentIndex > 0) {
                    setCurrentIndex((prev) => prev - 1);
                  }
                }}
              >
                {DEPARTMENTS.map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => handleDepartmentClick(dept.departmentName)}
                      className="shrink-0 min-w-full bg-[#e6e6ef] h-[200px] rounded-[30px] p-4
                                 flex flex-col items-center justify-center cursor-pointer
                                 hover:bg-[#dcdcf5] hover:shadow-lg hover:scale-105
                                 transition-all duration-300"
                    >
                      <div className="text-3xl mb-3 text-gray-700">
                        <Icon />
                      </div>
                      <h3 className="text-xs font-semibold text-gray-800 text-center">
                        {dept.departmentName}
                      </h3>
                    </div>
                  );
                })}
              </motion.div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {DEPARTMENTS.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`text-2xl cursor-pointer ${
                      currentIndex === index ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    •
                  </span>
                ))}
              </div>
            </div>

            {/* Desktop / Tablet Grid */}
            <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              {DEPARTMENTS.map((dept, index) => {
                const Icon = dept.icon;
                return (
                  <div
                    key={index}
                    onClick={() => handleDepartmentClick(dept.departmentName)}
                    className="flex flex-col items-center justify-center
                               bg-[#e6e6ef] h-[200px] rounded-[30px] p-4 cursor-pointer
                               hover:bg-[#dcdcf5] hover:shadow-lg hover:scale-105
                               transition-all duration-300"
                  >
                    <div className="text-3xl mb-3 text-gray-700">
                      <Icon />
                    </div>
                    <h3 className="text-xs font-semibold text-gray-800 text-center">
                      {dept.departmentName}
                    </h3>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
