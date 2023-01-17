import { SuperTitleFy } from "../../../../Helpers/Text/text";
import CREATE_REACT_KEY from "../../../../Helpers/Misc/createReactKey";
import Label from "../INPUT_LABEL/Labels/Label";
import { useClass } from "../../../../hooks/usehooks";

const SELECTION = (props) => {
  const labelClass = useClass([props.labelClass]);
  const mainClass = useClass([props.className]);
  const selectClass = useClass([props.selectClass]);
  const optionClass = useClass([props.optionClass]);
  const required = props.required ? props.required : false;
  return (
    <div className={mainClass}>
      <Label
        required={required}
        for={props.name}
        text={props.heading}
        className={labelClass}
      />
      <br></br>
      <select
        name={props.name}
        className={selectClass}
        onChange={props.onChange}
        id={props.name}
        required={required}
        size={props.size ? props.size : 1}
        value={props.value}
      >
        {props.options.map((option, index) => {
          return (
            <option
              className={optionClass}
              key={CREATE_REACT_KEY(index)}
              value={option}
            >
              {props.title ? SuperTitleFy(option) : option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SELECTION;
