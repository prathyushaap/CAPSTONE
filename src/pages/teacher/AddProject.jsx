import React, { useState } from "react";
import { DEPARTMENTS } from "../../constants/ProgramData";


const AddProject = () => {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [year, setYear] = useState("");
  const [members, setMembers] = useState([{ name: "" }]);

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
      members, // only names now
    };

    console.log("New Project:", newProject);

    // Reset form
    setProjectName("");
    setDescription("");
    setDepartmentName("");
    setNewDepartment("");
    setYear("");
    setMembers([{ name: "" }]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Add New Project</h2>

      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        className="border p-2 w-full"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
        required
      />

      {/* Department Dropdown */}
      <div>
        <label className="block mb-1 font-semibold">Department</label>
        <select
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
          className="border p-2 w-full"
          required
        >
          <option value="">-- Select Department --</option>
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
            placeholder="Enter new department"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            className="border p-2 w-full mt-2"
            required
          />
        )}
      </div>

      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="border p-2 w-full"
        required
      />

      {/* Members */}
      <div>
        <h3 className="font-semibold">Members</h3>
        {members.map((member, index) => (
          <div key={index} className="flex gap-2 my-1">
            <input
              type="text"
              placeholder="Member Name"
              value={member.name}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              className="border p-1 flex-1"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addMemberField}
          className="text-blue-600 mt-1"
        >
          + Add Member
        </button>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2">
        Add Project
      </button>
    </form>
  );
};

export default AddProject;
