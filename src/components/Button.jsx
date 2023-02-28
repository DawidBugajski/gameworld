import React from 'react';

const Button = ({ children }) => {
  return (
    <button className='px-4 py-1 text-white rounded-full bg-main-red hover:text-main-red hover:bg-white'>
      {children}
    </button>
  );
};

export default Button;
