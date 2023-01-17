import Label from "./Labels/Label";
import Input from "./Inputs/Input";
import { useClass } from "../../../../hooks/usehooks";
import { VERIFY_VALUE } from "../../../../Helpers/Verifications/verify";
import css from "./inputLabel.module.css";

const INPUT_LABEL = (props) => {
  const lab = props?.label;
  const inp = props.input;
  const labelClass = useClass([
    lab && lab.className && lab.className,
    css.label,
  ]);
  const inputClass = useClass([inp.className, css.input]);
  const divClass = useClass([props.className, css.main]);
  return (
    <div className={divClass}>
      {(!inp.hidden || !lab) && (
        <>
          <Label
            text={VERIFY_VALUE(lab?.text, inp.text)}
            required={props.required}
            className={labelClass}
          />
          <br></br>
        </>
      )}
      <Input
        text={VERIFY_VALUE(inp.text, lab?.text ? lab.text : inp.value)}
        value={inp.value}
        placeholder={VERIFY_VALUE(inp.placeholder, inp.text)}
        required={VERIFY_VALUE(props.required)}
        onChange={inp.onChange}
        ref={VERIFY_VALUE(inp.ref)}
        name={VERIFY_VALUE(inp.name)}
        className={inputClass}
        type={VERIFY_VALUE(inp.type, "text")}
        readOnly={VERIFY_VALUE(props.readOnly, false)}
        hidden={inp.hidden ? true : null}
      />
    </div>
  );
};

export default INPUT_LABEL;
