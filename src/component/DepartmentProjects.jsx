// import React from "react";
// import bgImage from "../assets/images/bgImage.webp";
// import Header from "./Header";
// import { useNavigate, useParams } from "react-router-dom";
// import { PROJECTSDATA } from "../constants/ProgramData";

// const DepartmentProjects = () => {
//   const navigate = useNavigate();
//   const { departmentName } = useParams();

//   // Decode URL text
//   const decodedDepartment = decodeURIComponent(departmentName);

//   // Filter projects by department
//   const filteredProjects = PROJECTSDATA.filter(
//     (project) => project.departmentName === decodedDepartment
//   );

//   return (
//     <div
//       className="min-h-screen w-full flex flex-col"
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Header />

//       <div className="flex flex-col items-center w-full px-4 py-16">
//         <div className="w-full max-w-7xl">

//           <div className="bg-white/40 backdrop-blur-2xl border border-white/20
//                           rounded-3xl shadow-[0px_15px_50px_rgba(0,0,0,0.20)]
//                           p-10 md:p-14">

//             <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-10">
//               {decodedDepartment} Projects
//             </h1>

//             {filteredProjects.length === 0 ? (
//               <p className="text-gray-600">No projects found.</p>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//                 {filteredProjects.map((project) => (
//                   <div
//                     key={project.id}
//                     onClick={() => navigate(`/projectdetails/${project.id}`)}
//                     className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg
//                                border border-white/30 shadow-xl
//                                hover:shadow-2xl hover:-translate-y-1
//                                transition-all duration-300 cursor-pointer"
//                   >
//                     <h3 className="text-lg font-semibold text-gray-800">
//                       {project.projectName}
//                     </h3>

//                     <p className="text-sm text-gray-600 mt-2">
//                       Department: {project.departmentName}
//                     </p>

//                     <p className="text-sm text-gray-600">
//                       Year: {project.year}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DepartmentProjects;


import React from "react";
import bgImage from "../assets/images/bgImage.webp";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";
import { PROJECTSDATA } from "../constants/ProgramData";

const DepartmentProjects = () => {
  const navigate = useNavigate();
  const { departmentName } = useParams();

  // Decode URL parameter safely
  const decodedDepartment = decodeURIComponent(departmentName);

  // Filter projects with trim + lowercase to avoid mismatch
  const filteredProjects = PROJECTSDATA.filter(
    (project) =>
      project.departmentName.trim().toLowerCase() ===
      decodedDepartment.trim().toLowerCase()
  );

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <div className="flex flex-col items-center w-full px-4 py-16">
        <div className="w-full max-w-7xl">
          <div className="bg-white/40 backdrop-blur-2xl border border-white/20
                          rounded-3xl shadow-[0px_15px_50px_rgba(0,0,0,0.20)]
                          p-10 md:p-14">

            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-10">
              {decodedDepartment} Projects
            </h1>

            {filteredProjects.length === 0 ? (
              <p className="text-gray-600">No projects found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => navigate(`/projectdetails/${project.id}`)}
                    className="p-6 rounded-2xl bg-white/60 backdrop-blur-lg
                               border border-white/30 shadow-xl
                               hover:shadow-2xl hover:-translate-y-1
                               transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.projectName}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      Department: {project.departmentName}
                    </p>

                    <p className="text-sm text-gray-600">
                      Year: {project.year}
                    </p>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentProjects;
