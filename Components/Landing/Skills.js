import react from "../../public/icons/icons8-react.png";
import react2 from "../../public/icons/icons8-react.gif";
import react2Dark from "../../public/icons/icons8-react.gif";
import python from "../../public/icons/icons8-python.png";
import python2 from "../../public/icons/icons8-python.gif";
import python2Dark from "../../public/icons/icons8-pythonDark.gif";
import mongoDB from "../../public/icons/icons8-mongodb-100.png";
import next from "../../public/icons/icons8-next.js-100.png";
import javaScript from "../../public/icons/icons8-javascript-100.png";
import lightNext from "../../public/icons/icons8-next.js-96.png";
import sql from "../../public/icons/icons8-sql-64.png";
import Heading from "../UI/Text/Heading";
import BootStrapGridder from "../../Components/UI/BootStrap/BootStrapGridder";
import { Col } from "react-bootstrap";
import Image from "next/image";
import { useSelect, useClass, useWindow } from "../../Merkurial/hooks/usehooks";
import { useEffect, useState } from "react";

const Skills = (props) => {
  const { height: HEIGHT } = useWindow();
  const [isLoaded, setIsLoaded] = useState(false);
  const { styles, theme } = useSelect("THEME");
  const { GENERAL, COLORS, SPACING } = styles;
  const { smPY, lgMY, lgMX, lgPX, lgPY } = SPACING;
  const { bronze } = COLORS;
  const { centerAll } = GENERAL;
  const currentTheme = theme.bg.split("_")[0];
  const nextIcon = currentTheme === "Dark" ? lightNext : next;
  const pythonGif = currentTheme === "Dark" ? python2Dark : python2;
  const reactGif = currentTheme === "Dark" ? react2Dark : react2;

  const logos = [
    { src: python, name: "python" },
    { src: mongoDB, name: "mongoDB" },
    { src: javaScript, name: "javaScript" },
    { src: nextIcon, name: "next" },
    { src: sql, name: sql },
    { src: react, name: "react" },
  ];

  const iconDiv = useClass([centerAll]);
  const heading = useClass([smPY, bronze, theme.text]);
  const imageClass = useClass([lgPX, lgPY, lgMX, lgMY, theme.bg]);

  useEffect(() => {
    setTimeout(() => {
      if (!isLoaded) {
        setIsLoaded(true);
      }
    }, 4000);
  }, [isLoaded]);
  return (
    <div className={iconDiv}>
      <Heading text="Skills" className={heading} />
      <div>
        <BootStrapGridder>
          {logos ? (
            logos.map((image, index) => {
              return (
                <Col
                  xxs="12"
                  xs="6"
                  md="4"
                  xl="4"
                  xxl="2"
                  key={`${(index, "|", image.name)}`}
                  style={{ height: "maxContent" }}
                >
                  <Image
                    style={{
                      backgroundColor: "black",
                      color: "black",
                    }}
                    src={image.src}
                    alt={image.name}
                    layout="intrinsic"
                    className={imageClass}
                    loading={
                      image.name === "react" || image.name === "python"
                        ? undefined
                        : "lazy"
                    }
                    height={`${HEIGHT / 2}px`}
                    width={`${HEIGHT / 2}px`}
                    priority={
                      image.name === "react" || image.name === "python"
                        ? true
                        : false
                    }
                  />
                </Col>
              );
            })
          ) : (
            <h1 className={centerAll}>----- Loading Skills -----</h1>
          )}
        </BootStrapGridder>
      </div>
    </div>
  );
};

export default Skills;
