import { FiEdit, FiArrowLeft, FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../assets/images/bgImage.webp";
import { useState, useEffect } from "react";

const StudentCard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullName: "Jane Doe",
    email: "abc@gmail.com",
    department: "Computer Science",
    year: "3rd Year",
    regNumber: "2021B12345",
    mobile: "9849785672",
  });

  useEffect(() => {
    // Get user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setUserData((prev) => ({
          ...prev,
          fullName: parsed.fullName || prev.fullName,
          email: parsed.email || prev.email,
        }));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isAuthenticated");
    // Dispatch custom event to notify Header of logout
    window.dispatchEvent(new Event("userDataChanged"));
    console.log("Logged out");
    navigate("/login");
  };

  return (
    <div
      className="flex items-center justify-center w-full min-h-screen py-8 sm:py-10 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white p-2 sm:p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
      >
        <FiArrowLeft className="text-gray-800 text-lg sm:text-xl" />
      </button>

      <div className="flex items-center justify-center w-full max-w-7xl px-4 sm:px-6 md:px-5 flex-wrap">
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-6 sm:p-8 w-full max-w-sm text-center relative">

          {/* Logout inside card */}
          <button
            onClick={handleLogout}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
          >
            <FiLogOut className="text-gray-800 text-base sm:text-lg" />
          </button>

          {/* Avatar */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-300 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 sm:h-12 sm:w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A4 4 0 0110 15h4a4 4 0 014.879 2.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3">
            {userData.fullName}
          </h2>

          {/* Info */}
          <div className="text-left space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <p>
              <span className="font-semibold">Department:</span> {userData.department}
            </p>
            <p>
              <span className="font-semibold">Year:</span> {userData.year}
            </p>
            <p>
              <span className="font-semibold">Registration No.:</span> {userData.regNumber}
            </p>
            <p>
              <span className="font-semibold">Mobile No:</span> {userData.mobile}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {userData.email}
            </p>
          </div>

          {/* Edit Button */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center w-full">
            <Link to={"/editprofile"}>
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-full shadow-lg hover:opacity-90 flex items-center justify-center gap-2 transition cursor-pointer text-sm sm:text-base">
                <FiEdit className="h-4 w-4 sm:h-5 sm:w-5" />
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
