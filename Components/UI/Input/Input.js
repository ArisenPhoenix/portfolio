import { useSelect, useClass } from "../../../Merkurial/hooks/usehooks";

const Input = (props) => {
  // console.log("INPUT PROPS: ", props);
  const { theme, styles } = useSelect("THEME");
  const { text, bg } = theme;
  const classes = useClass([bg, text, props.className]);

  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={classes}
      value={props.value}
      name={props.name}
      type={props.type ? props.type : "text"}
      required={props.required ? props.required : undefined}
    />
  );
};

export default Input;
