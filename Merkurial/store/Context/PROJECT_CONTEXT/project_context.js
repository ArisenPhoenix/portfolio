import { useState, createContext } from "react";
import project_list from "../../StoreData/projectData";

const ProjectContext = createContext({
  projectList: [{}],
});

export const ProjectContextProvider = (props) => {
  const projectValue = {
    projectList: project_list,
  };

  return (
    <ProjectContext.Provider value={projectValue}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
