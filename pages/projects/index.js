import css from "./projects.module.css";
import { ProjectContextProvider } from "../../store/PROJECT_CONTEXT/project_context";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import Frosty from "../../Components/UI/FrostedGlassDiv/Frosty";

const Projects = () => {
  return (
    <Frosty className={css.main}>
      <ProjectContextProvider>
        <BootStrapGridder fluid={true} rowClass="gx-25">
          <DisplayProjects />
        </BootStrapGridder>
      </ProjectContextProvider>
    </Frosty>
  );
};

export default Projects;
