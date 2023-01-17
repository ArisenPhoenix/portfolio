import css from "./DroppedButton.module.css";
import { useRouter } from "next/router";
import React from "react";

const DroppedButton = (props) => {
  const router = useRouter();
  const handleClick = props.onClick;
  const route = (e) => {
    e.preventDefault();
    handleClick(false);
    console.log("SHOULD DROP NOW");
    router.push(props.href);
  };

  return (
    <button onClick={route} className={css.button}>
      {props.text}
    </button>
  );
};

export default DroppedButton;
