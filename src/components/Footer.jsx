import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <p className='flex items-center justify-end py-3 pr-4 text-xs cursor-auto bg-main-gray'>
        ©Copyright by&nbsp;
        <Link to='https://github.com/DawidBugajski' target='_blank'>
          <strong className='transition-all duration-150 hover:text-main-red'>
            Dawid Bugajski
          </strong>
        </Link>
      </p>
    </>
  );
};

export default Footer;
