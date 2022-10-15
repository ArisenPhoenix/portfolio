import ProjectCard from "../ProjectCard/ProjectCard";
import Stack from "./Stack/Stack";
import Card from "../../UI/Card/Card";
import css from "./Project.module.css";
import DisplayImages from "./Images/DisplayImages";
import ProjectButtons from "../ButtonLinks/Buttons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { useSelect, useClass } from "../../../Mercury/hooks/usehooks";

const Project = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, bgGlass, text, textGlass } = theme;
  const { DIVS, GENERAL } = styles;
  const { inheritBorderRadius } = GENERAL;
  const classes = useClass([bg, text, inheritBorderRadius]);
  const { name, link, gitHub, language, images, description, video, stack } =
    props.project;

  return (
    <ProjectCard className={css.projectCard}>
      <div className={classes}>
        <h4 className={css.name}>{name}</h4>
        <Card className={css.carousel}>
          <DisplayImages images={images} />
        </Card>
        <Card className={css.projectName}>
          <ProjectButtons
            gitIcon={faGithub}
            webIcon={faFileExport}
            videoIcon={faVideo}
            gitLink={gitHub}
            webLink={link}
            videoLink=""
          />
        </Card>
        <Card className={css.description}>
          <p>Description: {description}</p>
        </Card>
        <Card className={css.languages}>
          <p>Language: {language}</p>
        </Card>
        <Card className={`${classes}`}>
          <Stack stack={stack} />
        </Card>
      </div>
    </ProjectCard>
  );
};

export default Project;
