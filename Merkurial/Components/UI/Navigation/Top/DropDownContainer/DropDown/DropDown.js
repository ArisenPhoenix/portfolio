import css from "./DropDown.module.css";
import NavContainer from "../NavContainer/NavContainer";
import useToggle from "../../../../../../hooks/Toggle";
import DropDownButton from "../DropDownButton/DropDownButton";
import NavButton from "../../../NavButtons/NavButton";
import OutsideAlerter from "../../../../../../hooks/useOutsideAlerter";
import DroppedButton from "../../../NavButtons/DroppedButton";
import React from "react";

const DropDown = (props) => {
  const [isDropped, toggleIsDropped, setIsDropped] = useToggle(false);
  const drop = () => {
    setIsDropped(false);
  };
  let buttons = props.navButtons ? props.navButtons : [false, false];
  const navButton = buttons[1] === false ? NavButton : buttons[1];

  return (
    <>
      {props.isMobile ? (
        <div className={css.dropDownContainer}>
          <div className={css.dropDown}>
            <OutsideAlerter setToFalse={drop}>
              <DropDownButton
                text="Drop"
                onClick={toggleIsDropped}
                isMobile={props.isMobile}
                drop={drop}
              />

              <div className={css.dropDownNavContainer}>
                <NavContainer
                  isDropped={isDropped}
                  navItems={props.navItems}
                  NavButton={DroppedButton}
                  isMobile={props.isMobile}
                  setToClose={toggleIsDropped}
                  onClick={drop}
                  conditions={["add"]}
                />
              </div>
            </OutsideAlerter>
          </div>
        </div>
      ) : (
        <div className={css.notDropDownContainer}>
          <NavContainer
            isDropped={null}
            navItems={props.navItems}
            NavButton={navButton}
            isMobile={false}
            onClick={() => {}}
          />
        </div>
      )}
    </>
  );
};

export default DropDown;
