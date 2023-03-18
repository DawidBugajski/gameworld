import React from 'react';
import { getPlatformIcon } from 'utils/helpers/getPlatformIcon';

const Platforms = ({ platforms }) => {
  const platformNames = platforms.map((platform) => platform.platform.name);
  const platformIcons = platformNames.map((platformName) => (
    <React.Fragment key={platformName}>
      {getPlatformIcon(platformName)}
    </React.Fragment>
  ));

  return (
    <div className='flex justify-center w-full h-4 gap-2 sm:h-6 lg:gap-4'>
      {platformIcons}
    </div>
  );
};

export default Platforms;
