import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DEPARTMENTS } from "../../constants/ProgramData";
import { ProjectContext } from "../../context/ProjectContext";

const AddProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, setProjects } = useContext(ProjectContext);

  const isEdit = Boolean(id);

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [year, setYear] = useState("");
  const [members, setMembers] = useState([{ name: "" }]);
  const [liveLink, setLiveLink] = useState("");
  const [projectReport, setProjectReport] = useState(null);

  // 🔹 Load data when editing
  useEffect(() => {
    if (isEdit) {
      const project = projects.find(p => p.id === Number(id));
      if (project) {
        setProjectName(project.projectName);
        setDescription(project.description);
        setDepartmentName(project.departmentName);
        setYear(project.year);
        setMembers(project.members);
        setLiveLink(project.liveLink || "");
        setProjectReport(project.projectReport || null);
      }
    }
  }, [id, isEdit, projects]);

  const addMemberField = () => {
    setMembers([...members, { name: "" }]);
  };

  const handleMemberChange = (index, value) => {
    setMembers(members.map((m, i) =>
      i === index ? { name: value } : m
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalDepartment =
      departmentName === "add-new" ? newDepartment : departmentName;

    if (isEdit) {
      // 🔹 UPDATE PROJECT
      setProjects(prev =>
        prev.map(p =>
          p.id === Number(id)
            ? {
                ...p,
                projectName,
                description,
                departmentName: finalDepartment,
                year: Number(year),
                members,
                liveLink,
                projectReport, // keeps old if unchanged
              }
            : p
        )
      );
    } else {
      // 🔹 ADD PROJECT
      setProjects(prev => [
        ...prev,
        {
          id: Date.now(),
          projectName,
          description,
          departmentName: finalDepartment,
          year: Number(year),
          members,
          liveLink,
          projectReport,
        }
      ]);
    }

    navigate("/projects");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold border-b pb-3">
          {isEdit ? "Update Project" : "Add New Project"}
        </h2>

        {/* Project Name */}
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
          className="w-full border px-3 py-2 rounded"
          required
        />

        {/* Description */}
        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border px-3 py-2 rounded"
          required
        />

        {/* Department & Year */}
        <div className="grid md:grid-cols-2 gap-4">
          <select
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          >
            <option value="">Select Department</option>
            {DEPARTMENTS.map((dept, i) => (
              <option key={i} value={dept.departmentName}>
                {dept.departmentName}
              </option>
            ))}
            <option value="add-new">Add New Department</option>
          </select>

          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
            className="border px-3 py-2 rounded"
            required
          />
        </div>

        {departmentName === "add-new" && (
          <input
            type="text"
            placeholder="New Department Name"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            className="border px-3 py-2 rounded w-full"
            required
          />
        )}

        {/* Live Link */}
        <input
          type="url"
          value={liveLink}
          onChange={(e) => setLiveLink(e.target.value)}
          placeholder="Live Project URL"
          className="border px-3 py-2 rounded w-full"
        />

        {/* 📎 Project Report Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Project Report
          </label>

          {isEdit && projectReport && (
            <p className="text-sm text-gray-500 mb-1">
              Current file: <b>{projectReport.name || "Uploaded file"}</b>
            </p>
          )}

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setProjectReport(e.target.files[0])}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Members */}
        {members.map((m, i) => (
          <input
            key={i}
            type="text"
            value={m.name}
            onChange={(e) => handleMemberChange(i, e.target.value)}
            placeholder={`Member ${i + 1}`}
            className="border px-3 py-2 rounded w-full"
            required
          />
        ))}

        <button
          type="button"
          onClick={addMemberField}
          className="text-blue-600 text-sm"
        >
          + Add Member
        </button>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded"
        >
          {isEdit ? "Update Project" : "Add Project"}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
