import css from "./Input.module.css";

const Input = (props) => {
  const classes = `${css.input} ${props.className}`;
  return (
    <input placeholder={props.placeholder} className={classes}>
      {props.text}
    </input>
  );
};

export default Input;
