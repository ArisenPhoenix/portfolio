import css from "./projects.module.css";
import { ProjectContextProvider } from "../../store/Context/PROJECT_CONTEXT/project_context";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import { useSelect, useClass, useWindow } from "../../Mercury/hooks/usehooks";

const Projects = () => {
  const { width, height } = useWindow();
  const WIDTH = Number(width);

  const { PROJECTS, THEME } = useSelect();
  const { theme, styles } = THEME;
  const { bg, text } = theme;
  const { SPACING } = styles;
  const { mdPX, xxlgPY, xxxlgPY, xxxxlgPY } = SPACING;
  const rowClass = useClass([css.row, "gx-5"]);

  const classes = useClass([bg, text, mdPX, xxlgPY]);
  return (
    <div className={classes}>
      <ProjectContextProvider>
        <BootStrapGridder fluid={true} rowClass={rowClass}>
          <DisplayProjects projects={PROJECTS} />
        </BootStrapGridder>
      </ProjectContextProvider>
    </div>
  );
};

export default Projects;
