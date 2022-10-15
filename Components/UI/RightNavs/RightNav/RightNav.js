import css from "./RightNav.module.css";
import Link from "../../../../../../Link/Link";
import { useClass } from "../../../../../../../Mercury/hooks/usehooks";

export const RightNav = (props) => {
  const defaultClasses = props.active
    ? useClass([props.className, css.textActive])
    : useClass([props.className, css.text]);
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
