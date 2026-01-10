import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiTrash2, FiCheck } from "react-icons/fi";
import bgImage from "../../assets/images/bgImage.webp";
import { DEPARTMENTS } from "../../constants/ProgramData";

const CreateTeam = ({ onTeamCreated }) => {
  const navigate = useNavigate();
  const [newTeam, setNewTeam] = useState({
    name: "",
    department: "",
    members: [{ name: "", email: "" }],
  });

  const handleAddMember = () => {
    if (newTeam.members.length < 4) {
      setNewTeam({
        ...newTeam,
        members: [...newTeam.members, { name: "", email: "" }],
      });
    }
  };

  const handleRemoveMember = (index) => {
    const updatedMembers = newTeam.members.filter((_, i) => i !== index);
    setNewTeam({
      ...newTeam,
      members: updatedMembers,
    });
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = newTeam.members.map((member, i) =>
      i === index ? { ...member, [field]: value } : member
    );
    setNewTeam({
      ...newTeam,
      members: updatedMembers,
    });
  };

  const handleCreateTeam = (e) => {
    e.preventDefault();

    // Validate form
    if (!newTeam.name.trim() || !newTeam.department.trim()) {
      alert("Please fill in team name and select a department");
      return;
    }

    // Validate members (at least 1 member)
    const validMembers = newTeam.members.filter(
      (member) => member.name.trim() && member.email.trim()
    );

    if (validMembers.length === 0) {
      alert("Please add at least one team member");
      return;
    }

    // Create team object
    const team = {
      id: Date.now().toString(),
      ...newTeam,
      members: validMembers,
      createdBy: JSON.parse(localStorage.getItem("userData")).id,
      createdAt: new Date().toISOString(),
      memberCount: validMembers.length,
    };

    // Save to localStorage
    const existingTeams = JSON.parse(localStorage.getItem("teams") || "[]");
    const updatedTeams = [...existingTeams, team];
    localStorage.setItem("teams", JSON.stringify(updatedTeams));

    // Reset form
    setNewTeam({
      name: "",
      department: "",
      members: [{ name: "", email: "" }],
    });

    // Notify parent component and navigate to my-team
    if (onTeamCreated) {
      onTeamCreated(team);
    }

    // Navigate to my team page
    navigate("/user-dashboard/my-team");
  };

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
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 p-8">
          <h2 className="text-3xl font-bold text-[#231942] mb-8 flex items-center gap-3">
            <FiPlus className="text-[#231942]" />
            Create Your Team
          </h2>

          <form onSubmit={handleCreateTeam} className="space-y-6">
            {/* Team Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Team Name
              </label>
                      <input
                        type="text"
                        value={newTeam.name}
                        onChange={(e) =>
                          setNewTeam({ ...newTeam, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#231942] focus:border-transparent"
                        placeholder="Enter team name"
                        required
                      />
            </div>

            {/* Department Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
                      <select
                        value={newTeam.department}
                        onChange={(e) =>
                          setNewTeam({ ...newTeam, department: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#231942] focus:border-transparent"
                        required
                      >
                <option value="">Select a department</option>
                {DEPARTMENTS.map((dept, index) => (
                  <option key={index} value={dept.departmentName}>
                    {dept.departmentName}
                  </option>
                ))}
              </select>
            </div>

            {/* Team Members */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Team Members (Max 4)
                </label>
                <span className="text-xs text-gray-500">
                  {newTeam.members.length}/4 members
                </span>
              </div>

              {newTeam.members.map((member, index) => (
                <div key={index} className="flex gap-3 mb-3">
                          <input
                            type="text"
                            value={member.name}
                            onChange={(e) =>
                              handleMemberChange(index, "name", e.target.value)
                            }
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#231942] focus:border-transparent"
                            placeholder="Member name"
                            required
                          />
                          <input
                            type="email"
                            value={member.email}
                            onChange={(e) =>
                              handleMemberChange(index, "email", e.target.value)
                            }
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#231942] focus:border-transparent"
                            placeholder="Member email"
                            required
                          />
                  {newTeam.members.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(index)}
                      className="px-3 py-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
                    >
                      <FiTrash2 className="text-lg" />
                    </button>
                  )}
                </div>
              ))}

              {newTeam.members.length < 4 && (
                <button
                  type="button"
                  onClick={handleAddMember}
                  className="flex items-center gap-2 text-[#231942] hover:text-[#2d3a5c] font-medium transition-colors"
                >
                  <FiPlus className="text-lg" />
                  Add Member
                </button>
              )}
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 py-3 bg-[#231942] text-white rounded-xl font-semibold shadow-md hover:bg-[#2d3a5c] transition-colors flex items-center justify-center gap-2"
              >
                <FiCheck className="text-lg" />
                Create Team
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
