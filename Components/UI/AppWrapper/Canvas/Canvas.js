import { useClass, useSelect } from "../../../../Mercury/hooks/usehooks";

const Canvas = (props) => {
  const classes = useClass([props.className]);
  return <main className={classes}>{props.children}</main>;
};

export default Canvas;
