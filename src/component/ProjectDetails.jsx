
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
import { FiDownload, FiExternalLink, FiArrowLeft, FiCalendar, FiUsers, FiBook } from "react-icons/fi";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Find the project by ID
    const project = PROJECTSDATA.find((item) => item.id === Number(id));
    setData(project);
  }, [id]);

  const handleDownload = () => {
    if (data?.projectReport) {
      // Create a blob URL for the file
      // In a real application, this would fetch the actual file from a server
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
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading project details...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div
        className="min-h-screen w-full py-8 sm:py-12"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-white hover:text-purple-200 transition-colors"
          >
            <FiArrowLeft className="text-xl" />
            <span className="font-medium">Back</span>
          </button>

          {/* Main Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 sm:p-8 text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {data.projectName}
              </h1>
              <div className="flex flex-wrap gap-4 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <FiBook className="text-lg" />
                  <span>{data.departmentName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-lg" />
                  <span>Year: {data.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-lg" />
                  <span>{data.members.length} Member{data.members.length !== 1 ? "s" : ""}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Description */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple-600 rounded"></span>
                      Project Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                      {data.description}
                    </p>
                  </div>

                  {/* Team Members */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-purple-600 rounded"></span>
                      Team Members
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {data.members.map((member, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                            {member.name.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-800">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Live Link */}
                  {data.liveLink && (
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Live Project
                      </h3>
                      <a
                        href={data.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                      >
                        <FiExternalLink className="text-lg" />
                        <span>View Live Project</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column - Download Section */}
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 sticky top-6">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <FiDownload className="text-3xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Project Report
                      </h3>
                      {data.projectReport && (
                        <p className="text-sm text-gray-600 mb-4 break-all">
                          {data.projectReport}
                        </p>
                      )}
                    </div>

                    {data.projectReport ? (
                      <button
                        onClick={handleDownload}
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <FiDownload className="text-lg" />
                        <span>Download Report</span>
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-full py-4 bg-gray-300 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
                      >
                        No Report Available
                      </button>
                    )}

                    {/* Project Info Card */}
                    <div className="mt-6 space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Department</p>
                        <p className="font-semibold text-gray-900">{data.departmentName}</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Year</p>
                        <p className="font-semibold text-gray-900">{data.year}</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <p className="text-xs text-gray-500 mb-1">Team Size</p>
                        <p className="font-semibold text-gray-900">
                          {data.members.length} Member{data.members.length !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

