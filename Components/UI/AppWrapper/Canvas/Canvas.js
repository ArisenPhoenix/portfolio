import { useClass, useSelect } from "../../../../Merkurial/hooks/usehooks";

const Canvas = (props) => {
  const classes = useClass([props.className]);
  return <main className={classes}>{props.children}</main>;
};

export default Canvas;
