import css from "./Bottom.module.css";
import { useClass } from "../../../../hooks/usehooks";
import Head from "next/head";
import Script from "next/script";
import SocialMediaButton from "../../Buttons/SocialMediaButton/SocialMediaButton";
import { faLine } from "@fortawesome/free-brands-svg-icons/faLine";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons/faFacebookSquare";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
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
      <div className={css.buttonContainer}>
        <SocialMediaButton
          icon={faFacebookSquare}
          alt="facebook icon"
          href="https://www.facebook.com"
          divClass={`${css.iconDiv} ${css.facebook}`}
          iconClass={css.iconClass}
        />
      </div>

      <div className={css.buttonContainer}>
        <SocialMediaButton
          icon={faPhone}
          alt="phone icon"
          href="0937413777"
          divClass={`${css.iconDiv} ${css.phone}`}
          iconClass={css.iconClass}
        />
      </div>

      <div className={css.buttonContainer}>
        <SocialMediaButton
          icon={faLine}
          alt="line icon"
          href="https://www.google.com/line"
          iconClass={css.iconClass}
          divClass={`${css.iconDiv} ${css.line}`}
        />
      </div>

      <div className={`${css.dateDiv} ${css.break}`}>
        <p className={css.date}>Copyright {copyrightDate}</p>
      </div>
    </div>
  );
};

export default Bottom;
