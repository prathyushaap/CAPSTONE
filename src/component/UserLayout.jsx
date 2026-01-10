import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserSidebar from "./user/UserSidebar";

const UserLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication
    const authStatus = localStorage.getItem("isAuthenticated");
    const storedUserData = localStorage.getItem("userData");

    if (authStatus !== "true" || !storedUserData) {
      navigate("/login");
      return;
    }

    try {
      const parsed = JSON.parse(storedUserData);
      if (parsed.role === "Teacher") {
        navigate("/teacher");
        return;
      }
    } catch (error) {
      navigate("/login");
      return;
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isAuthenticated");
    // Dispatch custom event to notify Header of logout
    window.dispatchEvent(new Event("userDataChanged"));
    navigate("/login");
  };

  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/featured-projects")}
            className="text-sm px-4 py-2 bg-gray-600 border rounded-full hover:bg-gray-700 flex items-center gap-2 text-gray-100"
          >
            <span>Back to Projects</span>
          </button>
          <span className="text-lg font-semibold text-gray-800">
            Capstone Dashboard
          </span>
        </div>
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-cyan-700 text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
      <div className="flex h-screen">
        <UserSidebar />
        <div className="flex-1 w-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
