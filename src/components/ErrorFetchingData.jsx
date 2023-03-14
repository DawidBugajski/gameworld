import React from 'react';

const ErrorFetchingData = ({ error }) => {
  return (
    <div className='p-5 bg-[#181A1B] min-h-[330px]'>
      <p>{error.message}</p>
    </div>
  );
};

export default ErrorFetchingData;
