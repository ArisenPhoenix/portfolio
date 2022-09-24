import css from "./DisplayProjects.module.css";
import { useContext } from "react";
import ProjectContext from "../../store/PROJECT_CONTEXT/project_context";
import Project from "./Project.js/Project";
import { Col, Row } from "react-bootstrap";

const DisplayProjects = (props) => {
  const projCtx = useContext(ProjectContext);
  const projects = projCtx.projectList;
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
