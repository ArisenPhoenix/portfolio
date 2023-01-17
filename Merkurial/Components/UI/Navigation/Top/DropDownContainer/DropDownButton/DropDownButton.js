import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const DropDownButton = (props) => {
  return (
    <>
      {props.isMobile && (
        <div onClick={props.onClick}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ height: "3rem", color: "antiquewhite" }}
          />
        </div>
      )}
    </>
  );
};

export default DropDownButton;
