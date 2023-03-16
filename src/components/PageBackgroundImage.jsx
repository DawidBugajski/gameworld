import React from 'react';

const PageBackgroundImage = ({ image }) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full'>
      <div className='h-[500px]'>
        <div
          className='w-full h-full bg-center bg-cover lg:bg-top'
          style={{
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${image})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PageBackgroundImage;
