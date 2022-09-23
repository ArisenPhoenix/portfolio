import { useState, createContext } from "react";
import project_list from "../StoreData/projectData";

const ProjectContext = createContext({
  projectList: ["", ""],
});

export const ProjectContextProvider = (props) => {
  const [projectList, setProjectList] = useState(project_list);
  const projectValue = {
    projectList: projectList,
  };

  return (
    <ProjectContext.Provider value={projectValue}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
