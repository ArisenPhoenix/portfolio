import css from "./DisplayProjects.module.css";
import Project from "./Project/Project";
import { Col } from "react-bootstrap";

const DisplayProjects = (props) => {
  const projects = props.projects;
  return projects.map((project, index) => {
    return (
      <Col
        sm="12"
        md="6"
        lg="6"
        xl="4"
        xxl="3"
        key={`Project| ${index}: ${project.name} `}
        className={`${css.col} px-10`}
      >
        <Project key={project.name} project={project} />
      </Col>
    );
  });
};

export default DisplayProjects;
