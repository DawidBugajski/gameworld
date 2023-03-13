import React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='min-h-[600px] lg:min-h-[700px] bg-center layout bg-hero hero bg-cover flex flex-col justify-between items-center py-4'>
      <div className='z-10 flex flex-col justify-center flex-1 w-10/12 gap-6 text-right'>
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
      <h2 className='z-10 self-start pl-6 text-xl italic font-semibold text-left sm:text-2xl'>
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
