import css from "./Label.module.css";

const Label = (props) => {
  const classes = `${props.className} ${css.label}`;
  return <label className={classes}>{props.text}</label>;
};

export default Label;
