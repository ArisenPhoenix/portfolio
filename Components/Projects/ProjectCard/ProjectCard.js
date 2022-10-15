import Card from "../../UI/Card/Card";
import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";

const ProjectCard = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { BORDERS, GENERAL } = styles;
  const { center } = GENERAL;
  const { gold, medium, largeRound } = BORDERS;
  const classes = useClass([
    gold,
    medium,
    largeRound,
    bg,
    text,
    props.className,
    center,
  ]);
  const handleClick = () => {};
  return (
    <Card className={classes} onClick={handleClick}>
      {props.children}
    </Card>
  );
};

export default ProjectCard;
