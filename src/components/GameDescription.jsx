import React from 'react';

const GameDescription = ({ desc }) => {
  if (!desc) return null;
  return <div>{desc}</div>;
};

export default GameDescription;
