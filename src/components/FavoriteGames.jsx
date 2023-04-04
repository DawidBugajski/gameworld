import React, { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import WishlistCard from 'components/WishlistCard';
import { setMoveGame } from 'store/slices/wishlistSlice';

const reducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_GAME': {
      const { id, toIndex } = action.payload;
      const fromIndex = state.findIndex((game) => game.id === id);
      if (fromIndex === -1) {
        return state;
      }

      const newGames = [...state];
      const [removed] = newGames.splice(fromIndex, 1);
      newGames.splice(toIndex, 0, removed);
      return newGames;
    }
    default:
      return state;
  }
};

const FavoriteGames = () => {
  const games = useSelector((state) => state.wishlist.games);
  const dispatch = useDispatch();
  const [wishlist, wishlistDispatch] = useReducer(reducer, games);

  const handleDrop = (item, targetIndex) => {
    wishlistDispatch({
      type: 'MOVE_GAME',
      payload: { id: item.id, toIndex: targetIndex },
    });
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'game',
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        handleDrop(item, wishlist.length);
      }
    },
    hover: (item, monitor) => {
      const dragIndex = wishlist.findIndex((game) => game.id === item.id);
      const hoverIndex = wishlist.findIndex(
        (game) =>
          game.id !== item.id && monitor.getClientOffset().y > game.offsetTop
      );
      if (dragIndex === hoverIndex) {
        return;
      }
      handleDrop(item, hoverIndex);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop}>
      <div className='flex flex-wrap gap-8'>
        {wishlist.map(({ image, name, id }, index) => (
          <WishlistCard
            image={image}
            name={name}
            id={id}
            key={id}
            index={index}
            ref={(ref) => (wishlist[index].offsetTop = ref.offsetTop)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteGames;
