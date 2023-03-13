import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_KEY, BASE_URL } from 'utils/constans';
import Carousel from './Carousel';
import SkeletonLoaderTopGames from './SkeletonLoaderTopGames';

const TopGames = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gamesHomePage'],

    // APi returns only 20 results (games), if you want pring the top 100, You have to loop it.
    queryFn: async () => {
      const promises = [];
      for (let i = 1; i <= 5; i++) {
        promises.push(
          axios.get(`${BASE_URL}?key=${API_KEY}&ordering=-ordering&page=${i}`)
        );
      }

      const responses = await Promise.all(promises);
      const games = responses.reduce(
        (acc, curr) => acc.concat(curr.data.results),
        []
      );
      return games;
    },
  });
  if (isLoading) return <SkeletonLoaderTopGames />;
  //TODO: Refactore Later
  // if (error) return `Error ${error.message}`;
  if (error)
    return (
      <div className='p-5 bg-[#181A1B] min-h-[330px]'>
        <p>error.message</p>
      </div>
    );

  return (
    <div className='bg-[#181A1B] relative'>
      <Carousel data={data} />
    </div>
  );
};

export default TopGames;
