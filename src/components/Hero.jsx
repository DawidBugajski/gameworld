import React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='shadow-left lg:min-h-[650px] min-h-[600px] bg-center bg-hero hero bg-cover flex flex-col justify-between items-center py-4 relative lg:bg-top-40'>
      <div className='relative flex flex-col justify-center flex-1 w-10/12 gap-6 text-right'>
        <h2 className='text-3xl italic font-bold tracking-widest'>
          The Witcher 3: Wild Hunt
        </h2>
        <p className='text-sm'>
          Your name is Geralt of Rivia and you are a witcher in a world
          devastated by war and full of bloodthirsty beasts.
        </p>
        <Link to={'/games/3328'}>
          <Button>See more</Button>
        </Link>
      </div>
      <h2 className='relative self-start pl-6 text-xl italic font-semibold text-left sm:text-2xl'>
        Top 100 games of{' '}
        <span className='relative inline-block mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white'>
          <span className='relative text-main-red'>all</span>
        </span>{' '}
        time
      </h2>
    </div>
  );
};

export default Hero;
