import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_KEY, BASE_URL } from 'utils/constans';

const GamesContainer = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gamesHomePage'],

    // APi returns only 20 games, if I want, for example, the top 100 I have to loop it.
    queryFn: async () => {
      const promises = [];
      for (let i = 1; i <= 2; i++) {
        promises.push(
          axios.get(`${BASE_URL}?key=${API_KEY}&ordering=-ordering&page=${i}`)
        );
      }
      const responses = await Promise.all(promises);
      const games = responses.map((res) => res.data.results);
      return games.flat();
    },
  });

  if (isLoading) return 'Loading...';
  if (error) return `Error ${error.message}`;

  const top300Games = (
    <div className='flex flex-wrap h-full  bg-[#181A1B] cursor-grab'>
      {data.map((game) => (
        <div
          key={game.id}
          className='flex-grow w-20 h-40 m-2 transition-all duration-300 scale-90 bg-center bg-cover rounded-2xl hover:scale-110 hover:brightness-50 lg:w-48 lg:h-72'
          style={{ backgroundImage: `url(${game.background_image})` }}
        >
          <h2 className='text-xl text-white opacity-0'>{game.name}</h2>
        </div>
      ))}
      npm st
    </div>
  );

  return top300Games;
};

export default GamesContainer;
