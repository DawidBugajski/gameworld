import React from 'react';
import { getPlatformIcon } from 'utils/helpers/getPlatformIcon';
import { Link } from 'react-router-dom';

const Stores = ({ stores }) => {
  const storeDetails = stores.map(({ store }) => {
    return {
      name: store.name,
      url: store.domain,
    };
  });

  const storeItem = storeDetails.map(({ name, url }) => (
    <Link to={`http://${url}`} target='_blank' key={name}>
      <div className='flex items-center justify-center gap-2 p-2 rounded-lg bg-gradient-to-r from-neutral-500 to-neutral-700 hover:from-neutral-500 hover:to-neutral-900 lg:p-1 xl:p-2'>
        <p className='flex-shrink-0 font-sans text-sm xl:text-xs 2xl:text-sm'>
          {name}
        </p>
        <React.Fragment key={name}>{getPlatformIcon(name)}</React.Fragment>
      </div>
    </Link>
  ));

  return (
    <div className='flex flex-col gap-4 mt-1 basis-full'>
      <p className='relative text-lg italic font-bold text-center uppercase lg:text-base lg:text-left 2xl:text-xl'>
        Where{' '}
        <span className='relative inline-block mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white'>
          <span className='relative text-main-red'>to</span>
        </span>{' '}
        buy
      </p>
      <div className={`grid grid-cols-2 gap-2 lg:grid-cols-1 xl:grid-cols-2`}>
        {storeItem}
      </div>
    </div>
  );
};

export default Stores;

// jak poszerzyć sklep jeśli
