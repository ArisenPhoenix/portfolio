import { ProjectContextProvider } from "../../store/Context/PROJECT_CONTEXT/project_context";
import DisplayProjects from "../../Components/Projects/DisplayProjects";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import { useSelect, useClass } from "../../Mercury/hooks/usehooks";

const Projects = () => {
  const { PROJECTS, THEME } = useSelect();
  const { theme, styles } = THEME;
  const { bg, text } = theme;
  const { SPACING } = styles;
  const { mdPX, xxlgPY } = SPACING;
  const rowClass = useClass(["gx-5"]);

  const classes = useClass([bg, text, xxlgPY, mdPX]);
  return (
    <div className={classes}>
      <ProjectContextProvider>
        <BootStrapGridder fluid={false} rowClass={rowClass}>
          <DisplayProjects projects={PROJECTS} />
        </BootStrapGridder>
      </ProjectContextProvider>
    </div>
  );
};

export default Projects;
