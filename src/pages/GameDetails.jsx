import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/constans';

const GameDetails = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery(['gameDetails', id], () =>
    axios.get(`${BASE_URL}/${id}?key=${API_KEY}`).then((res) => res.data)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  const { name, background_image: image } = data;
  console.log(data);
  return (
    <div className='h-screen bg-[#151515] shadow-left relative'>
      <div className='relative z-10 flex flex-col items-center justify-center mt-20'>
        <h1 className='text-4xl italic uppercase'>{name}</h1>
      </div>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='h-[500px]'>
          <div
            className='w-full h-full bg-center bg-cover lg:bg-top'
            style={{
              backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${image})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;

// co bym chciał tu umieścić, description?. background image, genres, metacritic, parent platforms,

/*
linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5))
example: witcher 3
https://api.rawg.io/api/games/3328/screenshots?key=76cb8b2b755e459baa2b0262c9aadfef - list of screenshots (there not always in id endpoint, so.)
https://api.rawg.io/api/games/3328/stores?key=76cb8b2b755e459baa2b0262c9aadfef - stores, where you can buy the game
https://api.rawg.io/api/games/3328/additions?key=76cb8b2b755e459baa2b0262c9aadfef - additions, ex. blood and wine.
https://api.rawg.io/api/games/3328/game-series?key=76cb8b2b755e459baa2b0262c9aadfef - games related to world lore

*/
