import React, { useState } from "react";

function ImageSlide({ Image }) {
  const [Currentslide, setCurrentslide] = useState(0);
  const nextSlide = () => {
    setCurrentslide((prevSlide) =>
      prevSlide === Image.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentslide((prevSlide) =>
      prevSlide === 0 ? Image.length - 1 : prevSlide - 1
    );
  };
  return (
    <div className="Slidecontainer">
      <div className="Imagecontainer">
        <img src={Image[Currentslide]} alt={`Slide ${Currentslide}`}></img>
      </div>
      <div className="Slidebutton">
        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>
      </div>
    </div>
  );
}
export default ImageSlide;
