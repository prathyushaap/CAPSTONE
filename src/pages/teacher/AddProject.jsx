import React, { useState } from "react";
import { DEPARTMENTS } from "../../constants/ProgramData";


const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [year, setYear] = useState("");
  const [members, setMembers] = useState([{ name: "" }]);
  const [projectReport, setProjectReport] = useState(null);
  const [liveLink, setLiveLink] = useState("");

  const addMemberField = () => {
    setMembers([...members, { name: "" }]);
  };

  const handleMemberChange = (index, value) => {
    const updatedMembers = members.map((member, i) =>
      i === index ? { name: value } : member
    );
    setMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalDepartment =
      departmentName === "add-new" ? newDepartment : departmentName;

    const newProject = {
      id: Date.now(),
      projectName,
      description,
      departmentName: finalDepartment,
      year: parseInt(year),
      members,
      liveLink,
      projectReport,
    };

    console.log(newProject);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-outfit text-gray-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-6"
      >
        <h2 className="text-2xl font-semibold border-b border-gray-400 pb-3 text-gray-600">
          Add New Project
        </h2>

        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Project Name
          </label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Department & Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Department
            </label>
            <select
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Department</option>
              {DEPARTMENTS.map((dept, index) => (
                <option key={index} value={dept.departmentName}>
                  {dept.departmentName}
                </option>
              ))}
              <option value="add-new">Add New Department</option>
            </select>

            {departmentName === "add-new" && (
              <input
                type="text"
                placeholder="New Department Name"
                value={newDepartment}
                onChange={(e) => setNewDepartment(e.target.value)}
                className="mt-2 w-full rounded-md border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
        </div>

        {/* Links & Files */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Live Project Link
            </label>
            <input
              type="url"
              value={liveLink}
              onChange={(e) => setLiveLink(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-md border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600">
              Project Report
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setProjectReport(e.target.files[0])}
              className="w-full rounded-md border border-gray-400 px-3 py-2 text-gray-600 outline-none"
            />
          </div>
        </div>

        {/* Members */}
        <div className="text-gray-600">
          <label className="block text-sm font-medium mb-2">
            Team Members
          </label>

          <div className="space-y-2">
            {members.map((member, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Member ${index + 1}`}
                value={member.name}
                onChange={(e) =>
                  handleMemberChange(index, e.target.value)
                }
                className="w-full rounded-md border border-gray-400 px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            ))}
          </div>

          <button
            type="button"
            onClick={addMemberField}
            className="mt-2 text-sm text-blue-600 hover:underline"
          >
            + Add another member
          </button>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-gray-400">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md"
          >
            Add Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
