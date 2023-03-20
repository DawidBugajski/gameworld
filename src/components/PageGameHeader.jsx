import React from 'react';
import Platforms from './Platforms';
import { getDateFormatter } from 'utils/helpers/getDateFormatter';

const PageGameHeader = ({ released, playtime, platforms, name }) => {
  const gamePremiere = getDateFormatter.format(new Date(released));

  const averagePlaytime =
    playtime !== 0 ? (
      <p className='font-mono text-xs uppercase sm:text-sm lg:text-sm lg:tracking-widest'>
        Average playtime: {playtime}hours
      </p>
    ) : null;
  const releasedGame =
    released !== null ? (
      <p className='px-2 py-0.5 text-black bg-white rounded-lg font-mono sm:text-sm text-xs lg:text-sm uppercase lg:tracking-widest'>
        {gamePremiere}
      </p>
    ) : null;

  return (
    <div className='flex flex-col items-center h-full'>
      <div className='flex flex-wrap items-center justify-center w-full gap-5'>
        <Platforms platforms={platforms} />
        {releasedGame}
        {averagePlaytime}
      </div>
      <h1 className='px-4 mt-4 text-2xl italic text-center uppercase lg:px-0 2xl:text-5xl fancy-undeline'>
        {name}
      </h1>
    </div>
  );
};

export default PageGameHeader;
