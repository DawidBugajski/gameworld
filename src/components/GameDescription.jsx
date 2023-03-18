import React from 'react';

const GameDescription = ({ desc }) => {
  if (!desc) return null;
  return (
    <div className='text-sm 2xl:text-base 2xl:basis-3/4 basis-2/3 shrink-0'>
      {desc}
    </div>
  );
};

export default GameDescription;
