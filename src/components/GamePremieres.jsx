import React from 'react';
import axios from 'axios';
import { PREMIERE_GAMES_URL } from 'utils/constans';
import { useQuery } from '@tanstack/react-query';
import SkeletonPremiereGames from './SkeletonPremiereGames';
import ErrorFetchingData from './ErrorFetchingData';
import GamePremiereCard from './GamePremiereCard';
import PremiereHeader from './PremiereHeader';

const GamePremieres = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['premiereGames'],
    cacheTime: 10 * 60 * 1000,
    staleTime: 5 * 60 * 1000,
    queryFn: () =>
      axios.get(PREMIERE_GAMES_URL).then((res) => res.data.results),
  });

  // if (isLoading) return <SkeletonPremiereGames data={data} />;
  // if (error) return <ErrorFetchingData error={error} />;

  return (
    <div className='relative w-full p-5 text-white bg-fixed bg-center bg-cover lg:p-8 shadow-left premiere bg-premiere'>
      <PremiereHeader />
      {isLoading && <SkeletonPremiereGames />}
      {error && <ErrorFetchingData error={error} />}
      {data && <GamePremiereCard data={data} />}
    </div>
  );
};

export default GamePremieres;
