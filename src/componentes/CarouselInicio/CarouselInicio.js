import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CarouselInicio.scss';

const CarouselInicio = () => {

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
  
  };

  return (
    <div className="fotos">
      <Slider {...settings}>
         <img src="assets/inicio1.jpg" alt="fotos"/>
         <img src="assets/inicio2.jpg" alt="fotos"/>
         <img src="assets/inicio3.jpg" alt="fotos"/>
         <img src="assets/inicio4.jpg" alt="fotos"/>
         <img src="assets/inicio5.jpg" alt="fotos"/>
         <img src="assets/inicio6.jpg" alt="fotos"/>
         <img src="assets/inicio7.jpg" alt="fotos"/>
         <img src="assets/inicio8.jpg" alt="fotos"/>
      </Slider>
    </div>
  );
};

export default CarouselInicio;
