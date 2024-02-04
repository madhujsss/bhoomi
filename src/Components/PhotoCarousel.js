import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PhotoCarousel =({ images, width, height }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    const imageStyle = {
        width: width || '100%', // Default to 100% if width prop is not provided
        height: height || 'auto', // Default to auto if height prop is not provided
      };
  
    return (
      <Slider {...settings} >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={imageStyle} />
          </div>
        ))}
      </Slider>
    );
  };

export default PhotoCarousel;
