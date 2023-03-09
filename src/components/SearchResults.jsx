import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/constans';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const SearchResults = () => {
  const { showResults, value } = useSelector((state) => state.search);
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const containerClass = `lg:mt-0 mt-2 text-white  list-none w-full text-left rounded-lg  ${
    showResults && isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
  }`;

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
        <li
          className=' hover:bg-opacity-50 transition-all duration-150 cursor-pointer p-[5px] my-2 lg:p-3 rounded-lg bg-neutral-900'
          key={game.id}
        >
          <Link
            onClick={() => console.log(game)}
            className='pl-2 text-sm text-white'
          >
            {game.name}
          </Link>
        </li>
      ))}
    </nav>
  );
};

export default SearchResults;

// loading się pokazuje cały czas, a to enabled chyba miało je wyłączać
// strasznie chujowe te gry fetchuje // &ordering=-rating
// problem na xs
// jakiś dopisek że jeśli nie wyszukuje gry to upewnij się że podana nazwa jest prawidłowa, ewentualnie wpisz pełną nazwę tytułu
