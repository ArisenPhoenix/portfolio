import { Carousel } from "react-bootstrap";
import NextImage from "../../../UI/NextImage/NextImage";
import { useSelect, useClass } from "../../../../Merkurial/hooks/usehooks";

const DisplayImages = (props) => {
  const { theme, styles } = useSelect("THEME");
  const { bg, text } = theme;
  const { DIVS, BORDERS, GENERAL } = styles;
  const carouselClass = useClass([bg, text]);
  const images = props.images;
  return (
    <>
      {images && images.length > 0 && (
        <Carousel className={carouselClass}>
          {images?.map((image, index) => {
            const thisImage = image?.default?.src;
            return image?.default?.src ? (
              <Carousel.Item key={`image ${index}`} className={carouselClass}>
                <NextImage
                  key={`Image| ${index}`}
                  layout="intrinsic"
                  src={thisImage}
                  width={2000}
                  height={2000}
                />
              </Carousel.Item>
            ) : null;
          })}
        </Carousel>
      )}
    </>
  );
};

export default DisplayImages;
