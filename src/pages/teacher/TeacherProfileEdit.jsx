import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.webp";
import { ProjectContext } from "../../context/ProjectContext";

const TeacherProfileEdit = () => {

    const {setProfileHandle} = useContext(ProjectContext)
  const [formData, setFormData] = useState({
    name: "Jane Doe",
    department: "Computer Science",
    designation: "Assistant Professor",
    employeeId: "TCH2021",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    // 👉 API call or state update goes here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-purple-200">

      {/* Edit Card */}
      <div className="bg-white w-96 rounded-2xl shadow-xl p-6">

        {/* Avatar */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple-200 flex items-center justify-center overflow-hidden">
          <img src={logo} alt="profile" className="w-full h-full object-cover" />
        </div>

        <h2 className="text-xl font-semibold text-center text-purple-800 mb-4">
          Edit Profile
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Department */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Department
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Employee ID */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Employee ID
            </label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              disabled
              className="w-full mt-1 px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button onClick={()=>setProfileHandle(true)}
              type="button"
              className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default TeacherProfileEdit;
