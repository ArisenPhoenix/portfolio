import Button from "../Button/Button";
import { useSelect, useClass } from "../../../Mercury/hooks/usehooks";
import InputGroup from "../InputGroup/InputGroup";
import BootstrapGridder from "../BootStrap/BootStrapGridder";
import { Col } from "react-bootstrap";
import Heading from "../Text/Heading";

const MessageForm = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { GENERAL, DIVS, BORDERS, DIMENSIONS, TEXT, SPACING } = styles;
  const { smPX, smPY, lgPX, lgMX, xxlgMX } = SPACING;
  const { paragraphIndent, xlg } = TEXT;
  const { halfX, wholeX, xlgVY, ninetyX } = DIMENSIONS;
  const { centerAll } = GENERAL;
  const { mdForm, buttonDiv, inline } = DIVS;
  const {
    noBorder,
    smallRound,
    largeRound,
    solid,
    wide,
    roundgold,
    roundsilver,
  } = BORDERS;

  const mainDivClass = useClass([bg, text, largeRound, roundsilver, xxlgMX]);
  const formClass = useClass([mdForm, centerAll, wholeX, smPY, lgPX]);
  const textAreaClass = useClass([xlgVY, paragraphIndent, ninetyX, xlg]);
  const inputGroupDivClass = useClass([smPY, smPX]);
  const submitButtonClass = useClass([
    smallRound,
    solid,
    buttonDiv,
    halfX,
    wide,
    roundgold,
  ]);

  const labelDivClasses = useClass([lgPX]);
  const inputClasses = useClass([largeRound, wholeX, lgPX]);

  const a = props.inputData.textArea;
  const inputs = props.inputData.inputs;

  const handleSubmit = props.handleSubmit;
  const onChange = props.onChange;

  const headingClass = useClass[text];

  return (
    <div className={mainDivClass}>
      <form onSubmit={handleSubmit} className={formClass}>
        <BootstrapGridder className={inputGroupDivClass}>
          <Heading
            text={props.message === "" ? props.defaultMessage : props.message}
            className={headingClass}
          />
          {inputs.map((input, index) => {
            const cols = props.inputData.cols;
            const ins = input.input;
            const lab = input.label;

            return (
              <Col
                xs={cols.xs}
                md={cols.md}
                xl={cols.xl}
                key={useClass([index, "|", ins.text])}
              >
                <InputGroup
                  label={{ text: lab.text }}
                  input={{
                    type: ins.type,
                    text: ins.text,
                    value: ins.value,
                    name: ins.name ? ins.name : ins.text.toLowerCase(),
                    required: ins.required,
                  }}
                  inputClass={inputClasses}
                  inputDivClass={inline}
                  labelDivClass={labelDivClasses}
                  className={inputGroupDivClass}
                  onChange={onChange}
                />
              </Col>
            );
          })}
        </BootstrapGridder>
        <div>
          <textarea
            value={a.value}
            className={textAreaClass}
            onChange={onChange}
            name={a.name}
          >
            {props.text}
          </textarea>
        </div>
        <div className={noBorder}>
          <Button text="Add" buttonClass={submitButtonClass} />
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
