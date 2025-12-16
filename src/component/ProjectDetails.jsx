
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { projects } from '../constants/ProgramData'
// import bgImage from "../assets/images/bgImage.webp";

// const ProjectDetails = () => {
//   const { id } = useParams()
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     const project = projects.find(item => item.id === Number(id))
//     setData(project)
//   }, [id]) // important!!
  
//   return data ? (
//     <div
//             className="flex items-center justify-center w-full py-10 h-full lg:py-10"
//             style={{
//                 backgroundImage: `url(${bgImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 backgroundRepeat: "no-repeat",
//                 minHeight: "100vh",
//             }}
//         >
//       {/* <p>{data.title}</p> */}
//       <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-5 flex-wrap">

//                 <div className="max-w-5xl w-full bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-10">

//                     {/* Top Section */}
//                     <div className="mb-12">

//                         {/* Title */}
//                         <h1 className="text-4xl font-semibold text-gray-900 mb-2">
//                             {data.title}
//                         </h1>

//                         {/* Meta */}
//                         <p className="text-gray-600 text-sm">
//                            {data.category}
//                         </p>
//                     </div>

//                     {/* Content Section */}
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

//                         {/* Description Box */}
//                         <div className="lg:col-span-2 p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-md border border-white/20">
//                             <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>

//                             <p className="text-gray-700 text-sm leading-relaxed">
//                                {data.description}
//                             </p>
//                         </div>

//                         {/* File Preview Box */}
//                         <div className="flex flex-col items-center p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-md border border-white/20">

//                             <h3 className="text-lg font-semibold text-gray-800 mb-6">File Preview</h3>

//                             {/* Icon */}
//                             <div className="w-24 h-24 bg-pink-200 rounded-2xl flex items-center justify-center shadow-inner mb-8">
//                                 <div className="text-purple-600 text-4xl">📄</div>
//                             </div>

//                             {/* Download Button */}
//                             <button className="mt-auto w-full py-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2">
//                                 Download Project <span className="text-lg">⬇️</span>
//                             </button>

//                         </div>
//                     </div>

//                 </div>

//             </div>
//     </div>
//   ) : (
//     <div><p>Loading...</p></div>
//   )
// }

// export default ProjectDetails


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PROJECTSDATA } from "../constants/ProgramData";
import bgImage from "../assets/images/bgImage.webp";

const ProjectDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Find the project by ID
    const project = PROJECTSDATA.find((item) => item.id === Number(id));
    setData(project);
  }, [id]);

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-center w-full py-10 h-full lg:py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-5 flex-wrap">
        <div className="max-w-5xl w-full bg-white/40 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl p-10">

          {/* Top Section */}
          <div className="mb-12">
            <h1 className="text-4xl font-semibold text-gray-900 mb-2">
              {data.projectName}
            </h1>
            <p className="text-gray-600 text-sm">
              Department: {data.departmentName} | Year: {data.year}
            </p>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Description Box */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-md border border-white/20">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {data.description}
              </p>

              {/* Members */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Team Members
              </h3>
              <ul className="list-disc pl-5 text-gray-700 text-sm">
                {data.members.map((member, index) => (
                  <li key={index}>
                    {member.name} - <span className="italic">{member.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* File Preview / Download Box */}
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-md border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Project File
              </h3>

              {/* Icon */}
              <div className="w-24 h-24 bg-pink-200 rounded-2xl flex items-center justify-center shadow-inner mb-8">
                <div className="text-purple-600 text-4xl">📄</div>
              </div>

              {/* Download Button */}
              {data.reportFile ? (
                <a
                  href={data.reportFile}
                  download
                  className="mt-auto w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
                >
                  Download Project <span className="text-lg">⬇️</span>
                </a>
              ) : (
                <button
                  disabled
                  className="mt-auto w-full py-3 bg-gray-300 text-white rounded-full shadow-lg cursor-not-allowed"
                >
                  No File Available
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

