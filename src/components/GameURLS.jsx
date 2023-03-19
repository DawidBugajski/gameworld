import React from 'react';
import { Link } from 'react-router-dom';

const GameURLS = ({ website, reddit }) => {
  return (
    <div className='flex order-last gap-4 text-sm italic font-bold uppercase sm:text-base basis-full decoration-main-red decoration-2 underline-offset-4'>
      {website !== '' && (
        <Link className='hover:underline' to={website} target='_blank'>
          Official Website
        </Link>
      )}
      {reddit !== '' && (
        <Link className='hover:underline' to={reddit} target='_blank'>
          Reddit
        </Link>
      )}
    </div>
  );
};

export default GameURLS;
