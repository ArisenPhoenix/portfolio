import { useRouter } from "next/router";
import css from "./LogoButton.module.css";
import Image from "next/image";
import React from "react";

const LogoButton = (props) => {
  const router = useRouter();
  const route = (e) => {
    e.preventDefault();
    props.onClick && props.onClick();
    router.push(props.href);
  };

  return (
    <div type="button" onClick={route} className={css.logoButton}>
      <Image
        src={props.src ? props.src : ""}
        as="image"
        alt={props.alt}
        onClick={route}
        className={css.image}
        placeholder="blur"
        fill={props.fill ? props.fill.toString() : "false"}
        sizes="(max-width: 300px),
        (max-width: 400px),
        (max-width: 600px)"
      />
    </div>
  );
};

export default LogoButton;
