import Label from "../Label/Label";
import Input from "../Input/Input";
import { useClass, useSelect } from "../../../Mercury/hooks/usehooks";

const InputGroupSameLine = (props) => {
  // console.log("Input Group Props: ", props);
  const { theme } = useSelect("THEME");
  const { bg, text } = theme;
  const l = props.label;
  const i = props.input;

  const containerClasses = useClass([bg, text, props.className]);
  const labelClasses = useClass([text, props.labelClass]);
  const inputClasses = useClass([text, props.inputClass]);
  const labelDivClass = useClass([props.labelDivClass]);
  const inputDivClass = useClass([props.inputDivClass]);

  return (
    <div className={containerClasses}>
      <div className={labelDivClass}>
        <Label text={l.text} className={labelClasses} />
      </div>
      <div className={inputDivClass}>
        <Input
          name={i.name}
          placeholder={
            props.text ? props.text : i.placeholder ? i.placeholder : i.text
          }
          className={inputClasses}
          value={i.value}
          required={i.required}
          type={i.type}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default InputGroupSameLine;
