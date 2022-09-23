import Link from "next/link";
import React from "react";
import css from "./Link.module.css";
import { LINKIFY } from "../../Helpers/Nav/Text/Linkify";

const Link_ = (props) => {
  const link = props.href ? props.href : LINKIFY(props.text);

  let defaultClasses = `${css.controls}`;

  const classes = props.active ? `${css.active}` : defaultClasses;
  return (
    <Link href={link}>
      <a className={classes}>{props.text}</a>
    </Link>
  );
};

export default Link_;
