import React from 'react';
import { Link } from 'react-router-dom';

const ErrorFetchingData = ({ message }) => {
  return (
    <div className='min-h-screen w-full flex-col error-container flex justify-center bouncing-loader bg-[#151515]  relative items-center gap-8'>
      <h1 className='font-extrabold text-transparent animate-bounce text-[200px] bg-clip-text bg-gradient-to-r from-main-red to-main-dark-red'>
        Oops !
      </h1>
      <p className='text-3xl'>Something went wrong</p>
      <p className='font-mono text-6xl font-bold uppercase'>{message}</p>
      <button className='px-5 py-1.5 text-2xl uppercase rounded-full bg-main-dark-red hover:text-main-dark-red hover:bg-main-gray transition-colors duration-150 border-transparent border-2 hover:border-main-dark-red'>
        <Link to='/'>Go Home</Link>
      </button>
    </div>
  );
};

export default ErrorFetchingData;
