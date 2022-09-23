import css from "./ImageLink.module.css";
import Image from "next/image";
const ImageLink = (props) => {
  return (
    <>
      <div className={css.main}>
        <Image
          className={css.image}
          src={props.src}
          alt={props.alt}
          width={60}
          height={50}
          blurDataURL="true"
          layout="intrinsic"
        />
      </div>
    </>
  );
};

export default ImageLink;
