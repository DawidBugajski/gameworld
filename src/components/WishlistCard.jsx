import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { setRemoveFromWishlist } from 'store/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import useWindowWidth from 'hooks/useWindowWidth';

const WishlistCard = ({ image, name, id }) => {
  const { isMobile } = useWindowWidth();
  const dispatch = useDispatch();

  const handleDeleteGame = (game) => dispatch(setRemoveFromWishlist(game));
  const desktopLayout = (
    <div
      key={id}
      className='outline-none p-2 sm:p-0 w-1/2 h-60 sm:h-60 sm:w-40 md:w-48 relative transition-all duration-150 rounded-lg sm:shadow-xl cursor-pointer min-[1800px]:w-52 md:h-72 group sm:hover:shadow-cyan-800 sm:hover:shadow-2xl hover:scale-95'
    >
      <FaTrash
        onClick={() => handleDeleteGame({ image, name, id })}
        className='absolute z-10 w-6 h-6 transition-colors duration-150 opacity-0 hover:stroke-2 top-4 right-4 group-hover:opacity-100 hover:fill-main-red'
      />
      <img
        alt={name}
        src={
          image !== null
            ? image
            : 'https://via.placeholder.com/600x400?text=Game+Image'
        }
        className='object-cover w-full h-full transition-all duration-0 rounded-xl group-hover:brightness-50 group-hover:blur-[1px]'
      />
      <Link to={`/games/${id}`}>
        <h3 className='absolute w-10/12 p-[10px] text-sm font-bold text-left uppercase transition-all duration-150 -translate-x-1/2 border-l-2 cursor-pointer border-main-red bottom-[10%] left-1/2 opacity-0 group-hover:opacity-100'>
          {name}
        </h3>
      </Link>
    </div>
  );
  const mobileLayout = (
    <Link className='inline-block w-1/2 p-2' key={id} to={`/games/${id}`}>
      <div className='relative rounded-lg outline-none h-60'>
        <FaTrash
          onClick={(e) => {
            e.preventDefault();
            handleDeleteGame({ image, name, id });
          }}
          className='absolute z-[50] w-6 h-6 transition-colors duration-150 top-4 right-4 '
        />
        <img
          alt={name}
          src={
            image !== null
              ? image
              : 'https://via.placeholder.com/600x400?text=Game+Image'
          }
          className='object-cover w-full h-full rounded-xl brightness-50'
        />
        <h3 className='border-main-red border-l-2 px-3 py-1 absolute w-full text-sm font-bold uppercase cursor-pointer bottom-[10%] left-1/2-translate-x-1/2'>
          {name}
        </h3>
      </div>
    </Link>
  );

  return <>{isMobile ? mobileLayout : desktopLayout}</>;
};

export default WishlistCard;
