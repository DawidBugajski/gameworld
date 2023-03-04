import React from 'react';
import { OpacityNavItem } from 'utils/helpers';

const SearchBar = () => {
  return (
    <OpacityNavItem>
      <input
        className='border-[2px] border-transparent w-full pl-6 py-1.5 mx-auto bg-[#141414] rounded-full outline-none text-white focus-visible:border-white lg:gap-9 '
        type='text'
        placeholder='Search...'
        onChange={() => {}}
      />
    </OpacityNavItem>
  );
};

export default SearchBar;
