import React from 'react';

const Gallery = ({ screenshots }) => {
  console.log(screenshots);

  if (!screenshots) return null;

  return (
    <div className='flex flex-wrap my-2'>
      {screenshots.map((image) => (
        <img className='w-1/3' key={image} src={image} alt={image} />
      ))}
    </div>
  );
};

export default Gallery;

// hot to put gallery below description, container now is on flex row, czy nie muszę przerobić gameDescription, żeby był w 1 divie razem z galerią?
