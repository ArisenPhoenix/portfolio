import css from "./Input.module.css";

const Input = (props) => {
  const classes = `${css.input} ${props.className ? props.className : null}`;
  return (
    <input
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={classes}
      value={props.value}
      name={props.name}
      type={props.type ? props.type : "text"}
      required={props.required}
    />
  );
};

export default Input;
