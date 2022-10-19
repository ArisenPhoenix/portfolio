import react from "../../public/icons/icons8-react-100.png";
import react2 from "../../public/icons/icons8-react.gif";
import python from "../../public/icons/icons8-python.gif";
import mongoDB from "../../public/icons/icons8-mongodb-100.png";
import next from "../../public/icons/icons8-next.js-100.png";
import javaScript from "../../public/icons/icons8-javascript-100.png";
import lightNext from "../../public/icons/icons8-next.js-96.png";
import sql from "../../public/icons/icons8-sql-64.png";
import Heading from "../UI/Text/Heading";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import { Col } from "react-bootstrap";
import Image from "next/image";

import { ControlledImage } from "../UI/NextImage/NextImage";
import { useSelect, useClass } from "../../Merkurial/hooks/usehooks";

const GET_SKILL_DATA = () => {
  const { theme } = useSelect("THEME");
  const currentTheme = theme.bg.split("_")[0];
  const nextIcon = currentTheme === "Dark" ? lightNext : next;
  const images = [
    { src: python, name: "python" },
    { src: mongoDB, name: "mongoDB" },
    { src: javaScript, name: "javaScript" },
    { src: nextIcon, name: "next" },
    { src: sql, name: sql },
    { src: react2 ? react2 : react, name: "react" },
  ];
  return { images: images };
};

const Skills = (props) => {
  const { styles, theme } = useSelect("THEME");
  const { GENERAL, DIMENSIONS, COLORS, SPACING } = styles;
  const { smPY } = SPACING;
  const { bronze } = COLORS;
  const { centerAll } = GENERAL;
  const { wholeX } = DIMENSIONS;
  const iconDiv = useClass([wholeX, centerAll]);
  const heading = useClass([smPY, bronze]);
  const { images } = GET_SKILL_DATA();
  return (
    <div className={iconDiv}>
      <Heading text="Skills" className={heading} />
      <BootStrapGridder>
        {images.map((image, index) => {
          return (
            <Col xxs="12" xs="4" key={`${(index, "|", image.name)}`}>
              <Image
                style={{ backgroundColor: "black" }}
                src={image.src}
                alt={image.name}
                layout="intrinsic"
                className={
                  image.name === "python" || image.name === "react"
                    ? theme.bg
                    : theme.bg
                }
              />
            </Col>
          );
        })}
      </BootStrapGridder>
    </div>
  );
};

export default Skills;
