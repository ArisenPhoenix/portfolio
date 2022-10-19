import css from "./ImageLink.module.css";
import Image from "next/image";
const ImageLink = (props) => {
  return (
    <div className={css.main}>
      <Image
        className={css.image}
        src={props.src}
        alt={props.alt}
        blurDataURL="true"
        layout={props.layout}
      />
    </div>
  );
};

export default ImageLink;
