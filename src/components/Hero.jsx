import React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='min-h-[700px] bg-center layout bg-hero hero bg-cover relative flex justify-center items-center py-12'>
      <div className='z-10 flex flex-col items-end w-10/12 gap-6 text-right'>
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
    </section>
  );
};

export default Hero;
