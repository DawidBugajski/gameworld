import React from 'react';
import { PREMIERE_GAMES_URL } from 'utils/constans';
import SkeletonLoaderTopGames from './SkeletonLoaderTopGames';
import ErrorFetchingData from './ErrorFetchingData';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import GamePremiereCard from './GamePremiereCard';

const GamePremieres = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['premiereGames'],
    cacheTime: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
    queryFn: () =>
      axios.get(PREMIERE_GAMES_URL).then((res) => res.data.results),
  });

  if (isLoading) return <SkeletonLoaderTopGames />;
  if (error) return <ErrorFetchingData error={error} />;

  return (
    <div className='relative w-full p-5 text-white bg-fixed bg-center bg-cover lg:p-8 shadow-left premiere bg-premiere'>
      <h3 className='relative text-xl italic text-center uppercase mb-7 sm:text-2xl'>
        upcoming{' '}
        <span className='relative inline-block mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-white'>
          <span className='relative text-main-red'>games</span>
        </span>{' '}
      </h3>
      <GamePremiereCard data={data} />
    </div>
  );
};

export default GamePremieres;

// add skeleton && jeśli sidebar rozwinięty to może od lg zmieńmy ilość kolumn
