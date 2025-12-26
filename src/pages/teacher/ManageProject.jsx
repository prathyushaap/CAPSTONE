import React, { useState } from "react";
import { PROJECTSDATA } from "../../constants/ProgramData";

const ManageProject = () => {
  const [projects, setProjects] = useState(PROJECTSDATA);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  // Start Edit
  const handleEdit = (project) => {
    setEditingId(project.id);
    setEditData({ ...project });
  };

  // Save Edit
  const handleSave = () => {
    setProjects((prev) =>
      prev.map((p) => (p.id === editingId ? editData : p))
    );
    setEditingId(null);
  };

  // Delete Project
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Manage Projects</h2>

      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border text-left">Project Name</th>
              <th className="p-3 border text-left">Year</th>
              <th className="p-3 border text-left">Members</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-gray-50">
                {/* Project Name */}
                <td className="p-3 border">
                  {editingId === project.id ? (
                    <input
                      type="text"
                      value={editData.projectName}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          projectName: e.target.value,
                        })
                      }
                      className="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    project.projectName
                  )}
                </td>

                {/* Year */}
                <td className="p-3 border">
                  {editingId === project.id ? (
                    <input
                      type="number"
                      value={editData.year}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          year: e.target.value,
                        })
                      }
                      className="w-full border rounded px-2 py-1 focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    project.year
                  )}
                </td>

                {/* Members */}
                <td className="p-3 border">
                  <div className="flex flex-wrap gap-1">
                    {project.members.map((m, i) => (
                      <span
                        key={i}
                        className="bg-gray-200 text-sm px-2 py-1 rounded"
                      >
                        {m.name}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Actions */}
                <td className="p-3 border text-center space-x-2">
                  {editingId === project.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(project)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}

            {projects.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center p-6 text-gray-500"
                >
                  No projects available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProject;
