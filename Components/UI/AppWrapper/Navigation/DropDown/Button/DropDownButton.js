import css from "./DropDownButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const DropDownButton = (props) => {
  const classes = `${css.image} ${css.hide} dropDownButton ${
    props.show === "show" ? "show" : null
  }`;
  return (
    <>
      <button onClick={props.onClick} className={`${css.button} ${css.hide}`}>
        <FontAwesomeIcon icon={faBars} color="white" fontSize="3rem" />
      </button>
    </>
  );
};

export default DropDownButton;
