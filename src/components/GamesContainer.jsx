import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_KEY, BASE_URL } from 'utils/constans';

const GamesContainer = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gamesHomePage'],
    queryFn: async () => {
      const promises = [];
      for (let i = 1; i <= 15; i++) {
        promises.push(
          axios.get(`${BASE_URL}?key=${API_KEY}&ordering=-ordering&page=${i}`)
        );
      }
      const responses = await Promise.all(promises);
      const games = responses.map((response) => response.data.results);
      return games.flat();
    },
  });

  if (isLoading) return 'Loading...';
  if (error) return `Error ${error.message}`;
  console.log(data);

  const top300Games = (
    <div className='flex flex-wrap h-full bg-black'>
      {data.map((game) => (
        <div
          key={game.id}
          className='flex-grow w-48 bg-center bg-cover h-72'
          style={{ backgroundImage: `url(${game.background_image})` }}
        >
          <h2 className='text-xl text-white'>{game.name}</h2>
        </div>
      ))}
    </div>
  );

  return top300Games;
};

export default GamesContainer;

// czy powinienem to jakoś podzielić, wyjąc przed return całą logikę, brigtness na hover, tekst opacity 0 na począktu
