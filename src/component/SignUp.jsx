import React, { useState } from "react";
import bgImage from "../assets/images/bgImage.webp";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiArrowLeft } from "react-icons/fi";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const roles = ["Teacher", "Student"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.role) {
      setError("Please select a role");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setError("");

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if email already exists
    const emailExists = existingUsers.some(user => user.email === formData.email);
    if (emailExists) {
      setError("Email already exists. Please login instead.");
      return;
    }

    // Create new user object
    const newUser = {
      id: Date.now().toString(),
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password, // In production, this should be hashed
      role: formData.role,
      createdAt: new Date().toISOString(),
    };

    // Add new user to localStorage
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Set as current user and redirect based on role
    const userData = {
      id: newUser.id,
      fullName: newUser.fullName,
      email: newUser.email,
      role: newUser.role,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true");
    
    // Dispatch custom event to notify Header of signup
    window.dispatchEvent(new Event("userDataChanged"));

    // Redirect based on role
    if (formData.role === "Teacher") {
      navigate("/teacher");
    } else {
      navigate("/featured-projects");
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen relative px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Floating Back Button */}
      <Link
        to="/"
        className="absolute  mb-5 top-6 left-6 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        <FiArrowLeft className="text-[#8d82c6] text-xl" />
      </Link>

      {/* Form Card */}
      <div className="bg-white p-6 sm:p-8 rounded-[20px] shadow-lg w-full max-w-md mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#8d82c6]">
          Create an Account
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px]
                       focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px]
                       focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
          />

          {/* Custom Role Dropdown */}
          <div className="relative w-full">
            <div
              className="w-full px-3 py-2 border border-[#b49cec] rounded-[30px] flex justify-between items-center cursor-pointer
                         focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span
                className={formData.role ? "text-gray-700" : "text-gray-400"}
              >
                {formData.role || "Select Role"}
              </span>
              <FiChevronDown className="text-gray-500" />
            </div>

            {dropdownOpen && (
              <ul className="absolute left-0 right-0 mt-1 bg-white border border-[#b49cec] rounded-lg shadow-md z-10">
                {roles.map((role) => (
                  <li
                    key={role}
                    onClick={() => handleRoleSelect(role)}
                    className="px-3 py-2 hover:bg-[#f0e7ff] cursor-pointer rounded-lg text-gray-700"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px]
                       focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            className="w-full px-3 py-2 border border-[#b49cec] text-gray-600 rounded-[30px]
                       focus:outline-none focus:ring-2 focus:ring-[#b49cec]"
          />

          {/* Sign Up Button */}
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-2 bg-[#b7b0dc] text-white rounded-[20px]
                         hover:bg-purple-600 transition-colors duration-300
                         font-semibold cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
