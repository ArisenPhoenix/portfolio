import css from "./LeftNav.module.css";
import Link from "../../../../../../Link/Link";
import { useClass } from "../../../../../../../Mercury/hooks/usehooks";

const NavItem = (props) => {
  const defaultClasses = props.active
    ? useClass([props.className, css.textActive])
    : useClass([props.className, css.text]);

  return (
    <Link
      href={props.link}
      text={props.text}
      active={props.active}
      className={defaultClasses}
      onClick={props.updateTop}
    />
  );
};

export default NavItem;
