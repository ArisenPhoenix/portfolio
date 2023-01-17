import css from "./Bottom.module.css";
import { useClass } from "../../../../hooks/usehooks";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const Bottom = (props) => {
  const copyrightDate = new Date().getFullYear();
  const classes = useClass([props.className, css.bottomContainer]);
  return (
    <div className={classes}>
      <Head>
        <Script
          src="https://kit.fontawesome.com/30d2b0e2da.js"
          crossorigin="anonymous"
        />
      </Head>

      <div className={`${css.dateDiv} ${css.break}`}>
        <p className={css.date}>Copyright {copyrightDate}</p>
      </div>
    </div>
  );
};

export default Bottom;
