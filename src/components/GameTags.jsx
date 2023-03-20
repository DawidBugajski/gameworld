import React from 'react';

const GameTags = ({ tags }) => {
  const tagName = tags.map((tag) => tag.name);

  return (
    <>
      {tags.length !== 0 && (
        <div className='order-last py-2 pl-2 text-xs tracking-widest border-l-2 border-main-red'>
          {tagName.length !== 1 ? tagName.join(', ') : tagName.join('')}
        </div>
      )}
    </>
  );
};

export default GameTags;
