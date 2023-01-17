import css from "./Button.module.css";
import { useClass } from "../../../hooks/usehooks";
import React from "react";
import { useRouter } from "next/router";

const Button = (props) => {
  const divClass = useClass([css.divClass, props.className]);
  const buttonClass = useClass([css.button, props.buttonClass]);
  return (
    <div className={divClass} value={props.value} onClick={props.onClick}>
      <button
        className={buttonClass}
        onClick={props.onClick}
        value={props.value}
      >
        <p className={css.text} onClick={props.onClick} value={props.value}>
          {props.text}
        </p>
      </button>
    </div>
  );
};

export default Button;

export const NextButton = (props) => {
  const divClass = useClass([css.divClass, props.className]);
  const buttonClass = useClass([css.button, props.buttonClass]);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <div className={divClass} onClick={handleClick}>
      <button className={buttonClass} onClick={handleClick}>
        <p className={css.text} onClick={handleClick}>
          {props.text}
        </p>
      </button>
    </div>
  );
};
