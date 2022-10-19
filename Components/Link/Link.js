import Link from "next/link";
import css from "./Link.module.css";
import { LINKIFY } from "../../Helpers/Nav/Text/Linkify";
import { useClass } from "../../Merkurial/hooks/usehooks";

const Link_ = (props) => {
  const link = props.href ? props.href : LINKIFY(props.text);
  const active = props.active ? css.active : undefined;
  const classes = useClass([props.className, css.controls]);
  const aClass = useClass([active]);
  const handleClick = () => {
    props.onClick(props.text);
  };
  return (
    <span className={classes} onClick={handleClick}>
      <Link href={link}>
        <a className={aClass}>{props.text}</a>
      </Link>
    </span>
  );
};

export default Link_;
