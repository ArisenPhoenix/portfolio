import css from "./TextArea.module.css";
import Frosty from "../FrostedGlassDiv/Frosty";

const TextArea = (props) => {
  const classes = `${css.frosty} ${props.className}`;
  const spellCheck = props.spellCheck ? props.spellCheck : undefined;
  const resizable = props.resizable ? props.resizable : undefined;

  return (
    <Frosty className={css.frosty}>
      <textarea
        onChange={props.onChange}
        className={classes}
        spellCheck={spellCheck}
        resizable={resizable}
        name={props.name}
        value={props.value}
        id={props.id}
        required={props.required}
      />
    </Frosty>
  );
};

export default TextArea;
