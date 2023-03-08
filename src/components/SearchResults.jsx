import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/constans';
import { useQuery } from '@tanstack/react-query';

const SearchResults = () => {
  const { showResults, value } = useSelector((state) => state.search);
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const containerClass = `w-full text-left bg-white rounded-lg transition-all duration-300 ${
    showResults && isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`;

  return <div className={containerClass}>SearchResults</div>;
};

export default SearchResults;
