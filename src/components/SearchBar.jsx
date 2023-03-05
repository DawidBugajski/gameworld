import React from 'react';

import { useSelector } from 'react-redux';

const SearchBar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const opacity = isMenuOpen ? 'opacity-1' : 'opacity-0';
  return (
    <input
      className={`mt-16 mb-8 lg:mb-0 lg:mt-0 border-[2px] border-transparent w-full pl-6 py-1.5 mx-auto bg-[#141414] rounded-full outline-none text-white focus-visible:border-white lg:gap-9 -z-10 transition-all duration-300 ${opacity}`}
      type='text'
      placeholder='Search...'
      onChange={() => {}}
    />
  );
};

export default SearchBar;
