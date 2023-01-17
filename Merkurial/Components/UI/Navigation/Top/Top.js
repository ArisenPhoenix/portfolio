import css from "./Top.module.css";
import { useClass, useWindow } from "../../../../hooks/usehooks";
import React, { useState } from "react";
import DropDown from "./DropDownContainer/DropDown/DropDown";
import LogoButton from "../NavButtons/LogoButton";

const Top = (props) => {
  const [isDropped, setIsDropped] = useState(false);
  const mainClass = useClass([props.className, css.topContainer]);
  const { width } = useWindow();
  const isMobile = width < 700;

  const toggleDropDown = (e) => {
    e.preventDefault();
    setIsDropped((prev) => {
      return !prev;
    });
  };

  return (
    <div className={mainClass}>
      <LogoButton text="Index" href="/" />
      <DropDown
        className={css.dropDown}
        isDropped={isDropped}
        isMobile={isMobile}
        toggle={toggleDropDown}
      />
    </div>
  );
};

export default Top;
