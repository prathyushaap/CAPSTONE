import React, { useContext, useState } from "react";
import logo from  "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import TeacherProfileEdit from "./TeacherProfileEdit";
import { ProjectContext } from "../../context/ProjectContext";

const TeacherProfile = () => {
  const {profileHandle,setProfileHandle} = useContext(ProjectContext)
  return (
    <>
    {
      profileHandle ? (
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">
      
      {/* Profile Card */}
      <div className="bg-white w-80 h-fit rounded-2xl shadow-xl p-6 text-center">

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-purple-200 flex items-center justify-center">
          <img src={logo} alt="" className="w-full h-full object-cover"/>
          <svg
            className="w-10 h-10 text-purple-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-800">
          Jane Doe
        </h2>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gray-300 mx-auto my-3"></div>

        {/* Info */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>
            <span className="font-medium">Department:</span> Computer Science
          </p>
          <p>
            <span className="font-medium">Designation:</span> Assistant Professor
          </p>
          <p>
            <span className="font-medium">Employee ID:</span> TCH2021
          </p>
        </div>

        {/* Button */}
       <button
   onClick={()=>setProfileHandle(!profileHandle)}
  className="mt-10  cursor-pointer px-6 py-2 rounded-full
             bg-gradient-to-r from-pink-400 to-purple-500 text-white
             text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
>
  Edit Profile
</button>
      </div>
    </div>
    ):(    <TeacherProfileEdit/>
)
    }
    </>
    
  );
};

export default TeacherProfile;
