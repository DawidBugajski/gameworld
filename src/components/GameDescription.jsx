import React from 'react';

const GameDescription = ({ desc }) => {
  if (!desc) return null;
  return <div className='text-white bg-black basis-2/3'>{desc}</div>;
};

export default GameDescription;
