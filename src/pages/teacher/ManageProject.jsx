import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../context/ProjectContext";

const ManageProject = () => {
  const navigate = useNavigate();
  const { projects, setProjects } = useContext(ProjectContext);

  const handleEdit = (id) => {
    // ✅ CORRECT PATH
    navigate(`/teacher/add-project/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Projects</h2>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Members</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td className="border p-2">{project.projectName}</td>
              <td className="border p-2">{project.year}</td>
              <td className="border p-2">
                {project.members.map((m, i) => m.name).join(", ")}
              </td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(project.id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(project.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {projects.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No projects found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProject;
