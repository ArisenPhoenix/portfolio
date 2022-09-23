import css from "./ProjectCard.module.css";
import Card from "../../UI/Card/Card";

const ProjectCard = (props) => {
  const handleClick = () => {};
  return (
    <Card
      className={`${css.projectCard} ${props.className}`}
      onClick={handleClick}
    >
      {props.children}
    </Card>
  );
};

export default ProjectCard;
