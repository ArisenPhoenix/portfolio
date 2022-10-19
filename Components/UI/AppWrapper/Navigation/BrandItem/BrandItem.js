import Image from "next/image";
import { useRouter } from "next/router";
import { useClass, useSelect } from "../../../../../Merkurial/hooks/usehooks";

const NavBrandImage = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg } = theme;
  const { GENERAL, NAVIGATION } = styles;
  const { floatLeft } = GENERAL;
  const { brand } = NAVIGATION;
  const classes = useClass([bg, floatLeft, brand]);

  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <div onClick={handleClick} className={classes}>
      <Image
        src={props.src}
        alt={props.alt}
        layout="responsive"
        loading="lazy"
      />
    </div>
  );
};

export default NavBrandImage;
