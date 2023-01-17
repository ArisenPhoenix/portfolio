import css from "./DisplayProjects.module.css";
import Project from "./Project/Project";
import { Col } from "react-bootstrap";
import { useClass, useSelect } from "../../Merkurial/hooks/usehooks";

const DisplayProjects = (props) => {
  const { styles } = useSelect("THEME");
  const { GENERAL } = styles;
  const { wrapSpaceBelow } = GENERAL;
  const projects = props.projects;
  const classes = useClass([css.col, "px-10", wrapSpaceBelow]);
  return projects.map((project, index) => {
    return (
      <Col
        sm="12"
        md="6"
        lg="6"
        xl="4"
        xxl="3"
        key={`Project| ${index}: ${project.name} `}
        className={classes}
      >
        <Project key={project.name} project={project} />
      </Col>
    );
  });
};

export default DisplayProjects;
