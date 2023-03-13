import React from 'react';

import { getNextDay } from 'utils/helpers/getNextDay';
import { API_KEY, BASE_URL } from 'utils/constans';

const GamePremieres = () => {
  const PREMIERE_GAMES_URL = `${BASE_URL}?dates=${getNextDay()},2024-12-31&ordering=-rating&key=${API_KEY}`;
  console.log(PREMIERE_GAMES_URL);
  return <div className='text-white bg-black'>GamePremieres</div>;
};

export default GamePremieres;
