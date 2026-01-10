
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
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTSDATA } from "../constants/ProgramData";
import bgImage from "../assets/images/bgImage.webp";
import Header from "./Header";
import { FiDownload, FiExternalLink, FiArrowLeft } from "react-icons/fi";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const project = PROJECTSDATA.find((item) => item.id === Number(id));
    setData(project);
  }, [id]);

  const handleDownload = () => {
    if (data?.projectReport) {
      const fileName = data.projectReport;
      const blob = new Blob(["Project Report Content"], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    }
  };

  if (!data) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-gray-600">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
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
          <div className="max-w-5xl w-full bg-white/80 backdrop-blur-md border border-white/30 rounded-3xl shadow-2xl p-6 sm:p-10">
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mb-6 flex items-center gap-2 text-gray-600 hover:text-[#231942] transition-colors"
            >
              <FiArrowLeft className="text-xl" />
              <span>Back</span>
            </button>

            {/* Top Section */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#231942] mb-3">
                {data.projectName}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span>Department: {data.departmentName}</span>
                <span>Year: {data.year}</span>
                <span>Members: {data.members.length}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
              {/* Description Box */}
              <div className="lg:col-span-2 p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-md border border-white/20">
                <h2 className="text-xl font-semibold text-[#231942] mb-4">
                  Description
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  {data.description}
                </p>

                {/* Team Members */}
                <h3 className="text-lg font-semibold text-[#231942] mb-3">
                  Team Members
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.members.map((member, index) => (
                    <span
                      key={index}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {member.name}
                    </span>
                  ))}
                </div>

                {/* Live Link */}
                {data.liveLink && (
                  <div className="mt-6">
                    <a
                      href={data.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#5e548e] hover:text-[#231942] font-medium transition-colors"
                    >
                      <FiExternalLink className="text-lg" />
                      <span>View Live Project</span>
                    </a>
                  </div>
                )}
              </div>

              {/* File Preview / Download Box */}
              <div className="flex flex-col items-center p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-md border border-white/20">
                <h3 className="text-lg font-semibold text-[#231942] mb-6">
                  Project File
                </h3>

                {/* Icon */}
                <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center shadow-inner mb-6">
                  <div className="text-purple-600 text-4xl">📄</div>
                </div>

                {/* File Name */}
                {data.projectReport && (
                  <p className="text-xs text-gray-600 mb-4 text-center break-all px-2">
                    {data.projectReport}
                  </p>
                )}

                {/* Download Button */}
                {data.projectReport ? (
                  <button
                    onClick={handleDownload}
                    className="w-full py-3 bg-[#b7b0dc] text-white rounded-full shadow-lg hover:bg-purple-600 transition-colors font-semibold flex items-center justify-center gap-2"
                  >
                    <FiDownload className="text-lg" />
                    Download Project
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-3 bg-gray-300 text-gray-500 rounded-full shadow-lg cursor-not-allowed font-semibold"
                  >
                    No File Available
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

