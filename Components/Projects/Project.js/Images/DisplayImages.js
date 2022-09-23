import css from "./DisplayImages.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const DisplayImages = (props) => {
  const images = props.images;
  return (
    <>
      {images && images.length > 0 && (
        <Carousel className={css.carousel} variant="dark">
          {images?.map((image, index) => {
            const thisImage = image?.default?.src;
            return image?.default.src ? (
              <Carousel.Item key={`image ${index}`}>
                <Image
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
