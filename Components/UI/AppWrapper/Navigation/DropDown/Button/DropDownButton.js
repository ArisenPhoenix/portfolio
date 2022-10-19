import css from "./DropDownButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  useSelect,
  useClass,
} from "../../../../../../Merkurial/hooks/usehooks";

const DropDownButton = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { NAVIGATION, GENERAL, BORDERS } = styles;
  const { noBorder } = BORDERS;
  const { bg, text } = theme;
  const { dropDownButton } = NAVIGATION;
  const { floatRight } = GENERAL;
  const classes = useClass([
    dropDownButton,
    bg,
    floatRight,
    props.className,
    noBorder,
  ]);
  return (
    <>
      {props.show && (
        <button onClick={props.onClick} className={classes}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </button>
      )}
    </>
  );
};

export default DropDownButton;
