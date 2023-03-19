import React from 'react';

const Genres = ({ genres }) => {
  const singleGenre = genres.map((genre) => genre.name);
  const genreNames = singleGenre.map((genre) => (
    <div
      className='flex-grow px-3 py-1 text-sm italic tracking-widest text-center rounded-xl bg-neutral-500 lg:px-2 lg:flex-grow-0 2xl:text-base'
      key={genre}
    >
      {genre}
    </div>
  ));

  return (
    <div className='flex flex-wrap items-center order-first gap-1'>
      {genreNames}
    </div>
  );
};

export default Genres;
