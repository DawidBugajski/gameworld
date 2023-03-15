import React from 'react';

const PremiereHeader = () => {
  return (
    <h3 className='relative text-xl italic text-center uppercase mb-7 sm:text-2xl'>
      upcoming{' '}
      <span className='relative inline-block mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white'>
        <span className='relative text-main-red'>games</span>
      </span>{' '}
    </h3>
  );
};

export default PremiereHeader;
