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
import { gallerySettings } from 'utils/galleryCarouselSettings';

const Gallery = ({ screenshots }) => {
  const dispatch = useDispatch();
  const { isGalleryOpen } = useSelector((state) => state.fullscreenGallery);
  if (!screenshots) return null;
  const settings = gallerySettings(screenshots);

  const handleOpenFullscreenGallery = (i) => {
    dispatch(setCurrentImageIndex(i));
    dispatch(setOpenGallery());
  };

  const isFullscreenGalleryOpen = isGalleryOpen
    ? 'h-screen overflow-hidden'
    : '';

  return (
    <div className={`w-full mt-4 ${isFullscreenGalleryOpen}`}>
      <Slider {...settings}>
        {screenshots.map((image, i) => (
          <div
            onClick={() => handleOpenFullscreenGallery(i)}
            className='relative p-0 cursor-pointer lg:p-1 gallery_card'
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
