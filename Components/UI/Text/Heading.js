import css from "./Text.module.css";

const Heading = (props) => {
  return <h2 className={css.heading}>{props.text}</h2>;
};

export default Heading;
