import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const WishlistIcon = () => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const hiddenMobile = isMenuOpen ? 'flex items-center' : 'hidden lg:flex';

  return (
    <>
      <Link to='/wishlist'>
        <div className={`${hiddenMobile} group`}>
          <button className='h-12 transition-all duration-300 rounded-full cursor-pointer bg-main-dark-red basis-12'>
            <AiFillHeart className='h-full w-full scale-75 fill-[#d8d5d0] group-hover:fill-[#fff]' />
          </button>

          <span className='tracking-widest text-[#d8d5d0] font-bold italic border-b-2 border-transparent uppercase group-hover:border-main-dark-red transition-all duration-300 group-hover:text-white flex-grow'>
            Wishlist
          </span>
        </div>
      </Link>
    </>
  );
};
export default WishlistIcon;
