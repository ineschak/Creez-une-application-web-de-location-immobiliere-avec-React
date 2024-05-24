import "./carrousel.css";
import arrowLeft from "../../assets/arrowLeft.png";
import arrowRight from "../../assets/arrowRight.png";
import { useState } from "react";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  return (
    <div className="carousel">
      <img
        className="carrousel-picture"
        src={pictures[currentIndex]}
        alt="imagecarrousel"
      />
      {pictures.length > 1 && (
        <>
          <img
            onClick={goToPreviousImage}
            className="prev"
            src={arrowRight}
            alt="goToPreviousImage"
          />
          <img
            onClick={goToNextImage}
            className="next"
            src={arrowLeft}
            alt="goToNextImage"
          />
          <div className="pagination">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
