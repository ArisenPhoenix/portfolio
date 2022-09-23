import css from "./Button.module.css";

const Button = (props) => {
  const classes = `${css.button} ${props.className}`;
  return (
    <div className={props.divClass}>
      <button onClick={props.onClick} className={classes}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;
