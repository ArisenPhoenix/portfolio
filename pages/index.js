import css from "./Landing.module.css";
import react from "../public/icons/icons8-react-100.png";
import react2 from "../public/icons/icons8-react.gif";
import python from "../public/icons/icons8-python.gif";
import mongoDB from "../public/icons/icons8-mongodb-100.png";
import next from "../public/icons/icons8-next.js-100.png";
import Image from "next/image";
import Frosty from "../Components/UI/FrostedGlassDiv/Frosty";
import { useClass } from "../Mercury/hooks/usehooks";

const Landing = () => {
  const images = [
    { src: python, name: "python" },
    { src: mongoDB, name: "mongoDB" },
    { src: next, name: "next" },
    { src: react2 ? react2 : react, name: "react" },
  ];
  return (
    <>
      <div>
        <h1>Landing</h1>
        {images.map((image, index) => {
          return (
            <Image
              key={`${(index, "|", image.name)}`}
              src={image.src}
              alt={image.name}
              layout="intrinsic"
              width="50"
              height="50"
            />
          );
        })}
        <Frosty />
      </div>
    </>
  );
};

export default Landing;
