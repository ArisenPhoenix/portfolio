import BootstrapGridder from "../../UI/BootStrap/BootStrapGridder";
import InputGroupSameLine from "../../UI/InputGroup/InputGroup";
import { Col } from "react-bootstrap";

const FormInputs = (props) => {
  return (
    <BootstrapGridder className={css.gridder} rowClass="">
      <Col className={css.col} xs="12" sm="6">
        <InputGroupSameLine
          label={{ text: "Title" }}
          input={{ text: "Title" }}
        />
      </Col>

      <Col className={css.col} xs="12" sm="6">
        <InputGroupSameLine
          text="Author"
          label={{ text: "Author" }}
          input={{ text: "Author" }}
        />
      </Col>
    </BootstrapGridder>
  );
};

export default FormInputs;
