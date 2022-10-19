import { useSelect, useClass } from "../../../Merkurial/hooks/usehooks";
import Image from "next/image";

const NextImage = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, bgGlass, text, textGlass } = theme;
  const divClass = useClass([bg, text]);
  return (
    <div className={bg}>
      <Image
        className={divClass}
        layout={props.layout}
        src={props.src}
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default NextImage;

export const ControlledImage = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, bgGlass, text, textGlass } = theme;
  const divClass = useClass([bg, text]);
  return (
    <Image
      className={divClass}
      layout={props.layout}
      src={props.src}
      width={props.width}
      height={props.height}
    >
      <a
        src={props.src}
        style={{ backgroundColor: props.black ? "black" : "white" }}
      />
    </Image>
  );
};
