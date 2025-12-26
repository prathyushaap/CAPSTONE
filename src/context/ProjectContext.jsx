import { createContext, useState } from "react";
import { PROJECTSDATA } from "../constants/ProgramData";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(PROJECTSDATA);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};
