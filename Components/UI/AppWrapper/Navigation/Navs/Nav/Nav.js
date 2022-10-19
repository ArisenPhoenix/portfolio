import Link from "../../../../../Link/Link";
import {
  useClass,
  useSelect,
} from "../../../../../../Merkurial/hooks/usehooks";

const NavItem = (props) => {
  const { NAVIGATION, GENERAL } = useSelect("THEME").styles;
  const { floatRight } = GENERAL;
  const { nav } = NAVIGATION;
  const defaultClasses = props.active
    ? useClass([props.className, nav])
    : useClass([props.className, nav]);

  let classes = !props.isLeft ? floatRight : undefined;

  classes = useClass([defaultClasses, classes]);

  return (
    <Link
      href={props.link}
      text={props.text}
      active={props.active}
      className={classes}
      onClick={props.updateTop}
    />
  );
};

export default NavItem;
