import ImageLink from "../../../../ImageLink/ImageLink";
import Image from "next/image";
import { useRouter } from "next/router";
import css from "./BrandItem.module.css";
import {
  useClass,
  useSelect,
  useWindow,
} from "../../../../../Merkurial/hooks/usehooks";

const NavBrandImage = (props) => {
  const { width: WIDTH } = useWindow();
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { GENERAL, NAVIGATION } = styles;
  const { floatLeft } = GENERAL;
  const { brand } = NAVIGATION;
  const classes = useClass([bg, floatLeft, brand]);

  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };
  let width = "300px";
  let height = "300px";
  if (WIDTH > 2000) {
    width = "500";
  }

  return (
    <div onClick={handleClick} className={classes}>
      <Image src={props.src} alt={props.alt} layout="responsive" />
    </div>
  );
};

export const NavBrandText = (name, image) => {
  return <></>;
};

export default NavBrandImage;
