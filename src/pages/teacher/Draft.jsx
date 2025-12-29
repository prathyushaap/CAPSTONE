import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";

const Draft = () => {
  const { projects, setProjects } = useContext(ProjectContext);

  const draftProjects = projects.filter(p => p.status === "draft");

  // ❌ Delete permanently
  const deleteProject = (id) => {
    if (window.confirm("Delete this draft permanently?")) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  // ♻ Restore to published
  const restoreProject = (id) => {
    setProjects(prev =>
      prev.map(p =>
        p.id === id ? { ...p, status: "published" } : p
      )
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Draft Projects</h2>

      {draftProjects.length === 0 ? (
        <p className="text-gray-500">No draft projects found.</p>
      ) : (
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
            {draftProjects.map(project => (
              <tr key={project.id}>
                <td className="border p-2">{project.projectName}</td>
                <td className="border p-2">{project.year}</td>
                <td className="border p-2">
                  {project.members.map(m => m.name).join(", ")}
                </td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => restoreProject(project.id)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Restore
                  </button>

                  <button
                    onClick={() => deleteProject(project.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Draft;
