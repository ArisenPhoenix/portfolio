import ImageLink from "../../../../ImageLink/ImageLink";
import { useRouter } from "next/router";
import css from "./BrandItem.module.css";

const NavBrandImage = (props) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <div onClick={handleClick} className={css.main}>
      <ImageLink src={props.src} alt={props.alt} />
    </div>
  );
};

export const NavBrandText = (name, image) => {
  return <></>;
};

export default NavBrandImage;
