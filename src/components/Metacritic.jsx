import React from 'react';

const Metacritic = ({ meta }) => {
  if (!meta) return null;

  const backgroundColor =
    meta <= 19
      ? 'bg-[#F44336]'
      : meta <= 39
      ? 'bg-[#FF9800]'
      : meta <= 59
      ? 'bg-[#FFEB3B]'
      : meta <= 79
      ? 'bg-[#8BC34A]'
      : 'bg-[#4CAF50]';

  return <div className={`w-full h-full ${backgroundColor}`}>{meta}</div>;
};

export default Metacritic;
