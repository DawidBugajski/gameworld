import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToggleSideBar } from 'store/slices/sideBarSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  const { width } = useSelector((state) => state.sideBar);
  const handleToggle = () => dispatch(setToggleSideBar());

  return (
    <div className={`w-[${width}px] bg-black text-white h-screen`}>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default SideBar;
