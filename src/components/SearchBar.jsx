import React from 'react';

const SearchBar = () => {
  return (
    <input
      className='border-[2px] border-transparent w-full pl-6 py-1.5 mx-auto bg-[#141414] rounded-full outline-none text-white focus-visible:border-white'
      type='text'
      placeholder='Search...'
      onChange={() => {}}
    />
  );
};

export default SearchBar;
