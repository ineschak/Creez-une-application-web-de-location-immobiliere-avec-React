import React from "react";
import Slider from "react-slick";

const Carrousel = ({ logement }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {logement.pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture} alt={`${index + 1}`} />
          {/* Affichez le composant LogementPage pour chaque image du carrousel */}
        </div>
      ))}
    </Slider>
  );
};

export default Carrousel;
