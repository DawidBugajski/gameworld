import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue, setClearValue } from 'store/slices/searchSlice';
import { AiFillCloseCircle } from 'react-icons/ai';

const SearchBar = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const { value, hasInputValue } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleSearchValue = (e) => dispatch(setSearchValue(e.target.value));
  const handleResetSearchValue = () => dispatch(setClearValue());
  const opacity = isMenuOpen ? 'opacity-1' : 'opacity-0';
  const showResetIcon = hasInputValue
    ? 'opacity-1 pointer-events-auto'
    : 'opacity-0 pointer-events-none';

  return (
    <div className='relative mt-4 lg:mt-0'>
      <AiFillCloseCircle
        onClick={handleResetSearchValue}
        className={`absolute top-[62%] w-7 h-7 lg:w-5 lg:h-5 transition-all duration-150 -translate-y-1/2 cursor-pointer right-4 lg:inset-y-1/2 stroke-white fill-main-dark-red hover:fill-main-red ${showResetIcon} ${opacity}`}
      />
      <input
        className={`text-sm mt-16 mb-8 lg:mb-0 lg:mt-0 border-[2px] border-transparent w-full pl-6 pr-10 py-1.5 mx-auto bg-[#141414] rounded-full outline-none text-white focus-visible:border-white lg:gap-9 -z-10 transition-all duration-300 ${opacity}`}
        type='text'
        placeholder='Search...'
        value={value}
        onChange={handleSearchValue}
      />
    </div>
  );
};

export default SearchBar;
