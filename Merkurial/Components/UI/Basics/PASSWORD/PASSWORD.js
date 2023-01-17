import useToggle from "../../../../hooks/Toggle";
import { VERIFY_VALUE } from "../../../../Helpers/Verifications/verify";
import css from "./PASSWORD.module.css";
import { useClass } from "../../../../hooks/usehooks";
import Input from "../INPUT_LABEL/Inputs/Input";
import Label from "../INPUT_LABEL/Labels/Label";
import PASSWORD_BUTTON from "./PASSWORD_BUTTON";
let timer;
const PASSWORD = (props) => {
  const [show, toggleShow] = useToggle(false);

  const required = props.required
    ? props.required
    : typeof props.required === "undefined"
    ? true
    : false;

  const toggleButton = () => {
    clearTimeout(timer);
    toggleShow();
    timer = setTimeout(
      () => {
        return toggleShow();
      },
      props.time ? props.time : 2000
    );
  };

  const lab = props.label;
  const inp = props.input;
  const button = props.button;
  const buttonClass = useClass([css.button, button.className]);
  const inputClass = useClass([css.input, inp.className]);
  const mainClass = useClass([css.main, props.className]);

  return (
    <div className={mainClass}>
      <Label text={lab.text} required={required} />
      <br></br>

      <div className={css.inputButton}>
        <Input
          type={show ? "text" : "password"}
          value={inp.value}
          placeholder={inp.placeholder}
          onChange={inp.onChange}
          required={required}
          className={inputClass}
          autoComplete={inp.autoComplete}
          name={props.name}
          texteditable={VERIFY_VALUE(props.texteditable)}
          onClick={props.onClick}
        />
        <PASSWORD_BUTTON
          onClick={toggleButton}
          text={button?.text ? button.text : "show"}
          buttonClass={buttonClass}
          onChange={inp.onChange}
        />
      </div>
    </div>
  );
};

export default PASSWORD;
