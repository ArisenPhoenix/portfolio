import css from "./Canvas.module.css";
import Card from "../../../../../Components/UI/Card/Card";
const Canvas = (props) => {
  return <Card className={css.main}>{props.children}</Card>;
};

export default Canvas;
