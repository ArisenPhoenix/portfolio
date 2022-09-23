import css from "./RightNav.module.css";
import Link from "../../../../../../Link/Link";

export const RightNav = (props) => {
  const defaultClasses = props.active
    ? `${props.className} ${css.textActive}`
    : `${props.className} ${css.text}`;
  const handleClick = () => {};

  return (
    <div className={css.display}>
      <Link
        href={props.link}
        text={props.text}
        onClick={handleClick}
        active={props.active}
        className={defaultClasses}
      />
    </div>
  );
};

export default RightNav;
