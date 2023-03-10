import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  // return (
  //   <div className='overflow-hidden'>
  //     <Slider {...settings}>
  //       {data.map((game) => (
  //         <div key={game.id}>
  //           <h3>{game.title}</h3>
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // );
};

export default Carousel;
