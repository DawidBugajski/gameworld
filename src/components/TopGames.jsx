import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { API_KEY, BASE_URL } from 'utils/constans';
import Carousel from './Carousel';
import SkeletonTopGames from './SkeletonTopGames';
import ErrorFetchingData from './Error';

const TopGames = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['gamesHomePage'],

    // APi returns only 20 results (games), if you want pring the top 100, You have to loop it.
    queryFn: async () => {
      const requests = [];
      for (let i = 1; i <= 5; i++) {
        requests.push(
          axios.get(`${BASE_URL}?key=${API_KEY}&ordering=-ordering&page=${i}`)
        );
      }

      const responses = await axios.all(requests);
      const games = responses.reduce(
        (acc, curr) => acc.concat(curr.data.results),
        []
      );
      return games;
    },
  });
  if (isLoading) return <SkeletonTopGames />;

  if (error) return <ErrorFetchingData error={error} />;

  return (
    <div className='bg-[#181A1B] relative'>
      <Carousel data={data} />
    </div>
  );
};

export default TopGames;
