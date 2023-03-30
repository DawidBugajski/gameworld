import React, { useEffect, useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { MdClose } from 'react-icons/md';
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
    accessibility: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          draggable: false,
          arrows: true,
          accessibility: false,
        },
      },
    ],
  };

  const thumbnailSettings = {
    slidesToShow: screenshots.length,
    arrows: false,
    initialSlide: currentImageIndex,
    className: 'thumbnail',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <div className='fixed inset-0 flex flex-col gap-5 items-center justify-center bg-black z-[100]'>
      <button
        className='top-[90%] absolute lg:top-[4%] z-50 transition-all duration-150 bg-white rounded-full opacity-75 xl:right-[3%] hover:opacity-100 lg:right-[4%] 2xl:right-[6%]'
        onClick={handleCloseGallery}
      >
        <MdClose fill='#000' className='text-5xl lg:text-4xl xl:text-6xl' />
      </button>
      <div className='w-full lg:w-[77%]'>
        <Slider {...settings} ref={sliderRef}>
          {screenshots.map((image) => (
            <div key={image}>
              <div
                className='bg-contain bg-no-repeat min-h-[250px] sm:min-h-[350px] md:min-h-[450px] lg:h-[75vh] bg-center cursor-grab lg:cursor-auto'
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className='w-full lg:block'>
        <Slider {...thumbnailSettings}>
          {screenshots.map((image, index) => (
            <div
              className='relative cursor-pointer h-[120px] thumbnail_card mx-auto'
              key={image}
              onClick={() => handleThumbnailClick(index)}
            >
              <div
                className='w-full h-full bg-center bg-cover rounded-lg'
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className='absolute inset-0 h-auto transition-opacity duration-300 bg-black rounded-lg opacity-50 hover:opacity-0'></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FullscreenGallery;
