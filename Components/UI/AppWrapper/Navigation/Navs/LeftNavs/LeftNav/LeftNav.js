import css from "./LeftNav.module.css";
import Link from "../../../../../../Link/Link";

const NavItem = (props) => {
  const defaultClasses = props.active
    ? `${props.className} ${css.textActive}`
    : `${props.className} ${css.text}`;
  const handleClick = () => {};

  return (
    <Link
      href={props.link}
      text={props.text}
      onClick={handleClick}
      active={props.active}
      className={defaultClasses}
    />
  );
};

export default NavItem;
