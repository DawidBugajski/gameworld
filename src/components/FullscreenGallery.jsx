import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCurrentImageIndex,
  setCloseGallery,
} from 'store/slices/fullscreenGallerySlice';

const FullscreenGallery = ({ screenshots }) => {
  const dispatch = useDispatch();
  const { currentImageIndex } = useSelector((state) => state.fullscreenGallery);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    arrows: true,
    initialSlide: currentImageIndex,
    accessibility: false,
    draggable: false,
  };
  console.log(screenshots.length);
  const thumbnailSettings = {
    slidesToShow: screenshots.length,
    arrows: false,
    initialSlide: currentImageIndex,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleThumbnailClick = (index) => {
    dispatch(setCurrentImageIndex(index));
  };

  const handleCloseGallery = () => dispatch(setCloseGallery());

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(currentImageIndex);
    }
  }, [currentImageIndex]);

  return (
    <div className='fixed inset-0 flex flex-col items-center justify-center bg-black z-[100]'>
      <button
        className='absolute z-50 w-20 h-20 text-white'
        onClick={handleCloseGallery}
      >
        Close
      </button>
      <div className='w-[1375px] mt-14 -mb-6'>
        <Slider {...settings} ref={sliderRef}>
          {screenshots.map((image) => (
            <div className='' key={image}>
              <img className='mx-auto' src={image} alt={image} />
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full scale-50 thumbnail_container'>
        <Slider {...thumbnailSettings}>
          {screenshots.map((image, index) => (
            <div
              className='relative cursor-pointer thumbnail_card'
              key={image}
              onClick={() => handleThumbnailClick(index)}
            >
              <img className='rounded-lg ' src={image} alt={image} />
              <div className='absolute inset-0 h-auto transition-opacity duration-300 bg-black rounded-lg opacity-0 hover:opacity-50'></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FullscreenGallery;
