import React from "react";
import { PROJECTSDATA } from "../../constants/ProgramData";

const TeacherDashboard = () => {
  const totalProjects = PROJECTSDATA.length;

  const totalMembers = PROJECTSDATA.reduce(
    (sum, project) => sum + project.members.length,
    0
  );

  const currentYear = new Date().getFullYear();
  const currentYearProjects = PROJECTSDATA.filter(
    (p) => p.year === currentYear
  ).length;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Teacher Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Projects"
          value={totalProjects}
          color="blue"
        />
        <StatCard
          title="Total Students Involved"
          value={totalMembers}
          color="green"
        />
        <StatCard
          title="Projects This Year"
          value={currentYearProjects}
          color="purple"
        />
      </div>

      {/* Recent Projects */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">
          Recently Added Projects
        </h2>

        <ul className="divide-y">
          {PROJECTSDATA.slice(0, 5).map((project) => (
            <li key={project.id} className="py-3">
              <p className="font-medium">{project.projectName}</p>
              <p className="text-sm text-gray-500">
                {project.year} • {project.members.length} members
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, color }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };

  return (
    <div className="bg-white shadow rounded-lg p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${colors[color]}`}>
        {value}
      </p>
    </div>
  );
};

export default TeacherDashboard;
