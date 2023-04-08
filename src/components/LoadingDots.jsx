import React from 'react';

const LoadingDots = () => {
  return (
    <div className='flex justify-center bouncing-loader bg-[#151515] min-h-screen shadow-left relative items-center'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingDots;
