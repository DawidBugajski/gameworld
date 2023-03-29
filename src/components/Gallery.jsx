import React from 'react';
import Slider from 'react-slick';
import FullscreenGallery from './FullscreenGallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setOpenGallery,
  setCurrentImageIndex,
} from 'store/slices/fullscreenGallerySlice';

const Gallery = ({ screenshots }) => {
  const dispatch = useDispatch();

  const { isGalleryOpen } = useSelector((state) => state.fullscreenGallery);

  const handleOpenFullscreenGallery = (i) => {
    dispatch(setCurrentImageIndex(i));
    dispatch(setOpenGallery());
  };

  const isFullscreenGalleryOpen = isGalleryOpen
    ? 'h-screen overflow-hidden'
    : '';

  if (!screenshots) return null;

  const settings = {
    infinite: false,
    speed: 1500,
    autoplay: true,
    slidesToShow: screenshots.length <= 3 ? screenshots.length : 3,
    autoplaySpeed: 5000,
    arrows: false,
    rows: screenshots.length <= 3 ? 1 : 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          rows: 1,
          autoplay: true,
          infinite: true,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          rows: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={`w-full mt-4 ${isFullscreenGalleryOpen}`}>
      <Slider {...settings}>
        {screenshots.map((image, i) => (
          <div
            onClick={() => handleOpenFullscreenGallery(i)}
            className='relative p-1 cursor-pointer gallery_card'
            key={image}
          >
            <div
              className='w-full h-full bg-center bg-no-repeat bg-contain rounded-lg lg:bg-cover '
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className='absolute inset-0 h-auto transition-opacity duration-300 bg-black rounded-lg opacity-0 hover:opacity-50'></div>
          </div>
        ))}
      </Slider>
      {isGalleryOpen && <FullscreenGallery screenshots={screenshots} />}
    </div>
  );
};

export default Gallery;
