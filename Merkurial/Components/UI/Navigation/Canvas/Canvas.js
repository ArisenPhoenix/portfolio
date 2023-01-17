import css from "./Canvas.module.css";
const Canvas = (props) => {
  return <div className={css.main}>{props.children}</div>;
};

export default Canvas;
