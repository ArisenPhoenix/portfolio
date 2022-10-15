import Card from "../../UI/Card/Card";
import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";

const ProjectCard = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { BORDERS } = styles;
  const { gold, medium, largeRound } = BORDERS;
  const classes = useClass([gold, medium, largeRound, bg, text]);
  const handleClick = () => {};
  return (
    <Card className={classes} onClick={handleClick}>
      {props.children}
    </Card>
  );
};

export default ProjectCard;
