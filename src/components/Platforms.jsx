import React from 'react';
import { getPlatformIcon } from 'utils/helpers/getPlatformIcon';
// prettier-ignore

const Platforms = ({ released, platforms, playtime }) => {
  // Format premiere date from API
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const date = new Date(released);
  const gamePremiere = dateFormatter.format(date);

  // Platforms
  const platformNames = platforms.map((platform) => platform.platform.name);

  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full h-20 fill-white'>
          {platformNames.map((platformName) => getPlatformIcon(platformName))}
      </div>
      <h2 className='relative self-start pl-6 text-sm italic font-semibold text-left sm:text-sm'>
        <span className='relative inline-block mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white before:opacity-50'>
          <span className='relative text-main-red'>{gamePremiere}</span>
        </span>{' '}
      </h2>
      <div>Average game time: {playtime} hours</div>
    </div>
  );
};

export default Platforms;
