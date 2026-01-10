import React, { useState, useEffect } from "react";
import { FiUsers, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/images/bgImage.webp";

const UserDashboard = () => {
  const navigate = useNavigate();
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

  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {userData?.fullName}!
          </h1>
          <p className="text-white/90 text-lg">
            Manage your team and collaborate on capstone projects
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Team Status Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-6">
            <div className="text-center mb-4">
              <FiUsers className="text-3xl text-[#231942] mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#231942]">Team Status</h3>
            </div>

            {userTeam ? (
              <div className="text-center">
                <div className="w-12 h-12 bg-[#231942] rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg text-white">✓</span>
                </div>
                <p className="font-semibold text-[#231942] mb-1">{userTeam.name}</p>
                <p className="text-sm text-gray-600 mb-3">{userTeam.department}</p>
                <p className="text-sm text-[#231942] font-medium">
                  {userTeam.memberCount} member{userTeam.memberCount !== 1 ? "s" : ""}
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg text-gray-500">○</span>
                </div>
                <p className="text-gray-600 mb-3">No team created yet</p>
                <button
                  onClick={() => navigate("/user-dashboard/create-team")}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#231942] text-white rounded-lg hover:bg-[#2d3a5c] transition-colors text-sm"
                >
                  <FiPlus className="text-sm" />
                  Create Team
                </button>
              </div>
            )}
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-6">
            <h3 className="text-lg font-semibold text-[#231942] mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => navigate("/user-dashboard/create-team")}
                disabled={!!userTeam}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  userTeam
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#231942] text-white hover:bg-[#2d3a5c]"
                }`}
              >
                <FiPlus className="text-lg" />
                <span>Create Team</span>
              </button>

              <button
                onClick={() => navigate("/user-dashboard/my-team")}
                disabled={!userTeam}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  !userTeam
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-[#231942] text-white hover:bg-[#2d3a5c]"
                }`}
              >
                <FiUsers className="text-lg" />
                <span>View My Team</span>
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-6">
            <h3 className="text-lg font-semibold text-[#231942] mb-4">Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">My Team</span>
                <span className="text-xl font-bold text-[#231942]">
                  {userTeam ? "1" : "0"}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">Team Members</span>
                <span className="text-xl font-bold text-[#231942]">
                  {userTeam ? userTeam.memberCount : "0"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity or Tips */}
        <div className="mt-8">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-8">
            <h3 className="text-2xl font-bold text-[#231942] mb-6">Getting Started</h3>

            {!userTeam ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-[#231942] mb-2">Step 1: Create Your Team</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Start by creating a team with 1-4 members from your department.
                  </p>
                  <button
                    onClick={() => navigate("/user-dashboard/create-team")}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#231942] text-white rounded-lg hover:bg-[#2d3a5c] transition-colors text-sm"
                  >
                    <FiPlus className="text-sm" />
                    Create Team
                  </button>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-[#231942] mb-2">Step 2: Collaborate</h4>
                  <p className="text-gray-600 text-sm">
                    Once your team is created, start working on capstone projects together.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-[#231942] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">✓</span>
                </div>
                <h4 className="text-xl font-semibold text-[#231942] mb-2">Team Created Successfully!</h4>
                <p className="text-gray-600 mb-4">
                  Your team "{userTeam.name}" is ready. Start collaborating on your capstone project.
                </p>
                <button
                  onClick={() => navigate("/user-dashboard/my-team")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#231942] text-white rounded-lg hover:bg-[#2d3a5c] transition-colors"
                >
                  <FiUsers className="text-sm" />
                  View Team Details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
