import React from "react";
import bgImage from "../assets/images/bgImage.webp"; // Make sure the path is correct

const UploadProject = () => {
  return (
    <div
      className="flex h-screen items-center justify-center w-full py-10  lg:py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-5 flex-wrap ">

        <form className="bg-white/70 backdrop-blur-md rounded-3xl p-6 max-w-lg w-full shadow-lg ">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Upload Your Project
          </h2>

          <input
            type="text"
            placeholder="Project Title"
            className="w-full mb-4 px-3 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          />

          <label className="block text-gray-800 font-semibold mb-1">Description</label>
          <textarea
            rows="2"
            placeholder="Enter project description"
            className="w-full mb-4 px-3 py-2 border border-purple-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder-gray-400"
          ></textarea>

          <div className="flex gap-3 mb-6">
            <select className="flex-1 px-3 py-2 border border-purple-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700">
              <option disabled selected>Department</option>
              <option>Computer Science</option>
              <option>Environmental Studies</option>
              <option>History</option>
            </select>

            <select className="flex-1 px-3 py-2 border border-purple-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-700">
              <option disabled selected>Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
            <button
              type="button"
              className="flex-1 px-3 py-2 text-xs border border-purple-300 rounded-[20px] bg-white text-purple-700 hover:bg-purple-200 hover:border-purple-500 transition-colors duration-200 font-medium flex items-center justify-center gap-2 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Add
            </button>


          </div>
          <div className="flex items-center justify-center w-full ">
            <button
              type="button"
              className="w-[200px] mb-4 py-2 bg-pink-300 text-purple-800 rounded-full shadow-md hover:shadow-lg hover:bg-pink-400 hover:text-white transition transform hover:scale-105 flex items-center justify-center gap-2 font-semibold cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-4 4m4-4l4 4M12 4v8"
                />
              </svg>
              Upload File
            </button>

          </div>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-[200px] py-2 bg-linear-to-r from-purple-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-indigo-600 transition transform hover:scale-105 font-semibold cursor-pointer"
            >
              Submit
            </button>

          </div>

        </form>


      </div>
    </div>
  );
};

export default UploadProject;
