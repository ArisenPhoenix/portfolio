import css from "./Text.module.css";
import React from "react";

const SUB_HEADING = (props) => {
  return <h2 className={css.heading}>{props.text}</h2>;
};

export default SUB_HEADING;
