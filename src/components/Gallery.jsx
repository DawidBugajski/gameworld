import React from 'react';
import Slider from 'react-slick';
import FullscreenGallery from './FullscreenGallery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { setOpenGallery } from 'store/slices/fullscreenGallerySlice';

const Gallery = ({ screenshots }) => {
  const dispatch = useDispatch();

  const handleOpenFullscreenGallery = () => dispatch(setOpenGallery());
  const { isGalleryOpen } = useSelector((state) => state.fullscreenGallery);
  const isFullscreenGalleryOpen = isGalleryOpen
    ? 'h-screen overflow-hidden'
    : '';

  if (!screenshots) return null;

  const settings = {
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 5000,
    arrows: false,
    rows: 2,
  };

  return (
    <div className={`w-full mt-4 ${isFullscreenGalleryOpen}`}>
      <Slider {...settings}>
        {screenshots.map((image) => (
          <div
            onClick={handleOpenFullscreenGallery}
            className='relative p-1 cursor-pointer gallery_card'
            key={image}
          >
            <img
              className='w-full rounded-lg hover:scale-125'
              src={image}
              alt={image}
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
