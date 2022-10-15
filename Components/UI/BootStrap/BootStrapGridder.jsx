import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
const BootstrapGridder = (props) => {
  if ((props.colWidths !== "") & (props.colWidths !== undefined)) {
    colWidths = props.colWidths;
  }

  return (
    <Container
      fluid={props.fluid ? props.fluid : null}
      className={props.className}
    >
      <Row className={`${props.rowClass ? props.rowClass : null}`}>
        {props.children}
      </Row>
    </Container>
  );
};

export default BootstrapGridder;

export const Column = (props) => {
  return (
    <Col colWidths={props.width} className={props.className}>
      {props.children}
    </Col>
  );
};
