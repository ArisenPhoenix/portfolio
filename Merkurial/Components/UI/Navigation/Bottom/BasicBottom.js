import Head from "next/head";
import Script from "next/script";
import css from "./Bottom.module.css";
import navCss from "../Navigation.module.css";
import { useClass } from "../../../../hooks/usehooks";
import React from "react";
import CREATE_REACT_KEY from "../../../../Helpers/Misc/createReactKey";

const BasicBottom = (props) => {
  const classes = useClass([css.bottomContainer, navCss.bottom]);
  return (
    <div className={classes}>
      <Head>
        <Script
          src="https://kit.fontawesome.com/30d2b0e2da.js"
          crossorigin="anonymous"
        />
      </Head>
      {footerObjs.map((Obj, index) => {
        const Component = Obj?.Component;
        const args = Obj?.args ? Obj.args : {};
        return <Component {...args} key={CREATE_REACT_KEY(index)} />;
      })}
    </div>
  );
};

export default BasicBottom;
