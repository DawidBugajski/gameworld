import React from 'react';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const { showResults, value } = useSelector((state) => state.search);
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const containerClass = `w-full text-left bg-white rounded-lg transition-all duration-300 ${
    showResults && isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`;

  return (
    <div onClick={() => console.log(value)} className={containerClass}>
      SearchResults
    </div>
  );
};

export default SearchResults;
