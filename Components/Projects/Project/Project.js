import ProjectCard from "../ProjectCard/ProjectCard";
import Stack from "./Stack/Stack";
import Card from "../../UI/Card/Card";
import css from "./Project.module.css";
import DisplayImages from "./Images/DisplayImages";
import ProjectButtons from "../ButtonLinks/Buttons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { useSelect, useClass } from "../../../Merkurial/hooks/usehooks";

const Project = (props) => {
  const { theme, styles, animations } = useSelect("THEME");
  const { bg, bgGlass, text, textGlass } = theme;
  const { GENERAL, BORDERS, TEXT } = styles;
  const { POP } = animations;
  const { smPop } = POP;
  const { center, xlg } = TEXT;
  const { roundsilver, wide, solid } = BORDERS;
  const { inheritBorderRadius, centerAll } = GENERAL;
  const classes = useClass([inheritBorderRadius]);
  const { name, link, gitHub, language, images, description, video, stack } =
    props.project;
  const cardClass = useClass([roundsilver, wide, solid, smPop]);

  return (
    <ProjectCard className={cardClass}>
      <div className={classes}>
        <h1 className={center}>{name}</h1>
        <Card className={css.carousel}>
          <DisplayImages images={images} />
        </Card>
        <Card className={xlg}>
          <ProjectButtons
            gitIcon={faGithub}
            webIcon={faFileExport}
            videoIcon={faVideo}
            gitLink={gitHub}
            webLink={link}
            videoLink=""
          />
        </Card>
        <div className={css.description}>
          <p>Description: {description}</p>
        </div>
        <div className={css.languages}>
          <p>Language: {language}</p>
        </div>
        <div className={classes}>
          <Stack stack={stack} />
        </div>
      </div>
    </ProjectCard>
  );
};

export default Project;
