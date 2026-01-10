import React, { useState } from "react";
import bgImage from "../assets/images/bgImage.webp";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find user by email
    const user = users.find(u => u.email === formData.email);
    
    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Check password
    if (user.password !== formData.password) {
      setError("Invalid email or password");
      return;
    }

    // Set current user data (without password)
    const userData = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("isAuthenticated", "true");
    
    // Dispatch custom event to notify Header of login
    window.dispatchEvent(new Event("userDataChanged"));

    // Redirect based on role
    if (user.role === "Teacher") {
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
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        <FiArrowLeft className="text-[#a49bd5] text-xl" />
      </button>

      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-[30px] p-6 sm:p-8 w-full max-w-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#a49bd5]">
          Welcome Back
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4 w-full">{error}</p>
        )}

        <form className="space-y-4 w-full" onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-[#aaa2d0] rounded-[20px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            placeholder="Email"
            required
          />

          {/* Password */}
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-[#aaa2d0] rounded-[20px] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            placeholder="Password"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-2 bg-[#b7b0dc] text-white rounded-[20px] hover:bg-purple-600 transition-colors duration-300 font-semibold cursor-pointer mx-auto block"
          >
            Login
          </button>
        </form>

        {/* Optional Links */}
        <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-500 w-full px-2 gap-2 sm:gap-0">
          <a href="#" className="hover:text-purple-500 text-center sm:text-left">
            Forgot Password?
          </a>
          <Link to="/signup" className="hover:text-purple-500 text-center sm:text-right">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
