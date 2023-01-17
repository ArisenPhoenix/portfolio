import { useClass } from "../../../../hooks/usehooks";
import css from "./Top.module.css";

const BasicTop = (props) => {
  const classes = useClass([props.className, css.topContainer]);
  return <div className={classes}>{props.children}</div>;
};

export default BasicTop;
