import { useSelector } from "react-redux";
import Image from "next/image";

const NextImage = (props) => {
  const { theme, styles } = useSelector((state) => state.THEME);
  const { bg, bgGlass, text, textGlass } = theme;
  const { DIV } = styles;
  return (
    <div className={bgGlass}>
      <Image
        className={bg}
        layout={props.layout}
        src={props.src}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default NextImage;
