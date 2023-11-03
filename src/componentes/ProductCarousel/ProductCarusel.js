import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemProduct from "../ItemProduct/ItemProduct";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import './ProductCarousel.scss';

const ProductCarousel = ({ products }) => {
  // Define las funciones CustomPrevArrow y CustomNextArrow antes de usarlas
  const CustomPrevArrow = (props) => (
    <div {...props} className="custom-prev-arrow">
    <ArrowLeftIcon className="atras"/>
   
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className="custom-next-arrow">
    <ArrowRightIcon className="adelante"/>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    
    ],
    prevArrow: <CustomPrevArrow />, // Componente personalizado para la flecha izquierda
    nextArrow: <CustomNextArrow />, // Componente personalizado para la flecha derecha
  };

  return (
    <div className="padre">
      <Slider className="slider" {...settings}>
        {products.map((product) => (
          <div className="hijo" key={product.id}>
            <ItemProduct data={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
