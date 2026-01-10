import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPlus, FiUsers, FiHome } from "react-icons/fi";

const UserSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userData, setUserData] = useState(null);
  const [userTeam, setUserTeam] = useState(null);

  useEffect(() => {
    // Get user data
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsed = JSON.parse(storedUserData);
      setUserData(parsed);

      // Get user's team
      const storedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
      const team = storedTeams.find(team => team.createdBy === parsed.id);
      setUserTeam(team);
    }
  }, []);

  // Update team data when navigating between routes
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsed = JSON.parse(storedUserData);
      const storedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
      const team = storedTeams.find(team => team.createdBy === parsed.id);
      setUserTeam(team);
    }
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-56 bg-white border-r border-gray-200 p-4">
      <div className="space-y-4">
        {/* User Info */}
        <div className="text-center">
          <div className="w-12 h-12 bg-[#231942] rounded-full flex items-center justify-center mx-auto mb-2">
            <span className="text-lg font-bold text-white">
              {userData?.fullName?.charAt(0)?.toUpperCase()}
            </span>
          </div>
          <h3 className="font-semibold text-gray-800 text-sm">{userData?.fullName}</h3>
          <p className="text-xs text-gray-500">{userData?.role}</p>
        </div>

        {/* Navigation */}
        <div className="space-y-1">
          <button
            onClick={() => navigate("/user-dashboard")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm ${
              isActive("/user-dashboard")
                ? "bg-gray-100 text-[#231942]"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FiHome className="text-base" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => navigate("/user-dashboard/create-team")}
            disabled={!!userTeam}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm ${
              !!userTeam
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-[#231942] text-white hover:bg-[#2d3a5c]"
            }`}
          >
            <FiPlus className="text-base" />
            <span>Create Team</span>
          </button>

          <button
            onClick={() => navigate("/user-dashboard/my-team")}
            disabled={!userTeam}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md transition-colors text-sm ${
              !userTeam
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : isActive("/user-dashboard/my-team")
                ? "bg-gray-100 text-[#231942]"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FiUsers className="text-base" />
            <span>My Team</span>
          </button>
        </div>

        {/* Team Stats */}
        {userTeam && (
          <div className="bg-gray-50 rounded-md p-3">
            <h4 className="font-semibold text-[#231942] mb-2 text-sm">Team Info</h4>
            <div className="space-y-1 text-xs">
              <p><span className="font-medium">Name:</span> {userTeam.name}</p>
              <p><span className="font-medium">Department:</span> {userTeam.department}</p>
              <p><span className="font-medium">Members:</span> {userTeam.memberCount}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSidebar;
