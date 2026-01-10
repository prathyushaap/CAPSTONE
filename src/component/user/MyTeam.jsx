import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiUsers, FiTrash2 } from "react-icons/fi";
import bgImage from "../../assets/images/bgImage.webp";

const MyTeam = ({ onTeamDeleted }) => {
  const navigate = useNavigate();
  const [userTeam, setUserTeam] = useState(null);
  const [userData, setUserData] = useState(null);

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

  const handleDeleteTeam = () => {
    if (!userTeam) return;

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this team? This action cannot be undone."
    );

    if (confirmDelete) {
      const storedTeams = JSON.parse(localStorage.getItem("teams") || "[]");
      const updatedTeams = storedTeams.filter(team => team.id !== userTeam.id);
      localStorage.setItem("teams", JSON.stringify(updatedTeams));

      setUserTeam(null);

      // Notify parent component
      if (onTeamDeleted) {
        onTeamDeleted();
      }

      // Navigate back to dashboard
      navigate("/user-dashboard");
    }
  };

  if (!userTeam) {
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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-12 text-center">
            <FiUsers className="text-6xl text-gray-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#231942] mb-4">
              No Team Created Yet
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              You haven't created a team yet. Click "Create Team" in the sidebar to get started.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#231942] mb-2">
                {userTeam.name}
              </h2>
              <p className="text-gray-600">
                Department: {userTeam.department}
              </p>
            </div>
            <button
              onClick={handleDeleteTeam}
              className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
            >
              <FiTrash2 className="text-lg" />
              Delete Team
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Members */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FiUsers className="text-purple-600" />
                Team Members ({userTeam.memberCount})
              </h3>
              <div className="space-y-3">
                {userTeam.members.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                      {member.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Stats */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Team Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">Created</span>
                    <span className="text-gray-600">
                      {new Date(userTeam.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">Members</span>
                    <span className="text-2xl font-bold text-purple-600">
                      {userTeam.memberCount}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="font-medium text-gray-700">Department</span>
                    <span className="text-gray-600">{userTeam.department}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ready to Collaborate!
                </h3>
                <p className="text-gray-600 text-sm">
                  Your team is now ready for collaborative projects. Start working on your capstone project together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
