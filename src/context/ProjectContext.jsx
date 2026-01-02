import { createContext, useState } from "react";
import { PROJECTSDATA } from "../constants/ProgramData";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(
    PROJECTSDATA.map(project => ({
      ...project,
      status: project.status || "published", // ✅ default status
    }))
  );
  const [profileHandle,setProfileHandle] = useState(true)

  return (
    <ProjectContext.Provider value={{ projects, setProjects,profileHandle,setProfileHandle }}>
      {children}
    </ProjectContext.Provider>
  );
};
