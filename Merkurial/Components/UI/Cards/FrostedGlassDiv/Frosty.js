import css from "./FrostedDiv.module.css";

const Frosty = (props) => {
  const classes = `${css.frosty} ${props.className}`;
  return <div>{props.children}</div>;
};

export default Frosty;
