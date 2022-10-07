import css from "./projects.module.css";
import { ProjectContextProvider } from "../../store/Context/PROJECT_CONTEXT/project_context";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import Frosty from "../../Components/UI/FrostedGlassDiv/Frosty";
import { useSelector } from "react-redux";

const Projects = () => {
  const projects = useSelector((state) => state.PROJECTS);
  return (
    <Frosty className={css.main}>
      <ProjectContextProvider>
        <BootStrapGridder fluid={true} rowClass={`${css.row} gx-25`}>
          <DisplayProjects projects={projects} />
        </BootStrapGridder>
      </ProjectContextProvider>
    </Frosty>
  );
};

export default Projects;
