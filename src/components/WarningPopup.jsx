import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setClearWishlist,
  setHideClearPopupWarning,
} from 'store/slices/wishlistSlice';

const WarningPopup = () => {
  const dispatch = useDispatch();
  const handleClearWishlist = () => dispatch(setClearWishlist());
  const handleHideWarningPopup = () => dispatch(setHideClearPopupWarning());
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black opacity-75'></div>
      <div className='relative z-10 flex justify-around p-8 text-black bg-white'>
        <button onClick={handleClearWishlist}>YES</button>
        <button onClick={handleHideWarningPopup}>NO</button>
      </div>
    </div>
  );
};

export default WarningPopup;
