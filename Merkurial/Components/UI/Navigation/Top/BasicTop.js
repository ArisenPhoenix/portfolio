import { useClass } from "../../../../hooks/usehooks";

const BasicTop = (props) => {
  const classes = useClass([props.className]);
  const isMobile = props.isMobile;
  return <div className={classes}>{props.children}</div>;
};

export default BasicTop;
