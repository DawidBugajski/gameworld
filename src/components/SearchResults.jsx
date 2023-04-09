import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/constans';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { setToggleMenu } from 'store/slices/toggleMenuSlice';
import useWindowWidth from 'hooks/useWindowWidth';

const SearchResults = () => {
  const dispatch = useDispatch();
  const { width } = useWindowWidth();
  const { showResults, value } = useSelector((state) => state.search);
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const containerClass = `lg:mt-0 mt-2 text-white  list-none w-full text-left rounded-lg  ${
    showResults && isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`;
  const handleCloseOpenMenu = () => width < 640 && dispatch(setToggleMenu());

  const { isLoading, error, data } = useQuery({
    queryKey: ['searchValue', value],
    queryFn: () =>
      axios
        .get(`${BASE_URL}?key=${API_KEY}&search=${value}&page_size=10`)
        .then((res) => res.data),
    enabled: showResults,
  });

  if (!data) return null;
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <nav className={containerClass}>
      {data.results.map((game) => (
        <Link
          key={game.id}
          to={`/games/${game.id}`}
          onClick={handleCloseOpenMenu}
        >
          <li
            className=' hover:bg-opacity-50 transition-all duration-150 cursor-pointer p-[5px] my-2 lg:p-3 rounded-lg bg-neutral-900'
            key={game.id}
          >
            <p className='pl-2 text-sm text-white'>{game.name}</p>
          </li>
        </Link>
      ))}
    </nav>
  );
};

export default SearchResults;
