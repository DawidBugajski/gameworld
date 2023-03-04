import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { OpacityNavItem } from 'utils/helpers';

const WishlistIcon = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const hiddenMobile = isMenuOpen
    ? 'flex justify-center items-center gap-4'
    : 'hidden lg:justify-center lg:items-center lg:gap-4 lg:flex';

  return (
    <>
      <Link to='/wishlist'>
        <div className={`${hiddenMobile} group`}>
          <button className='w-12 h-12 transition-all duration-300 rounded-full cursor-pointer bg-main-dark-red '>
            <AiFillHeart className='h-full w-full scale-75 fill-[#d8d5d0] group-hover:fill-[#fff]' />
          </button>
          <OpacityNavItem>
            <span className='tracking-widest text-[#d8d5d0] font-bold italic border-b-2 border-transparent uppercase group-hover:border-main-dark-red transition-all duration-300 group-hover:text-white'>
              Wishlist
            </span>
          </OpacityNavItem>
        </div>
      </Link>
    </>
  );
};
export default WishlistIcon;
