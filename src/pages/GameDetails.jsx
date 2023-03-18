import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/constans';
import PageBackgroundImage from 'components/PageBackgroundImage';
import PageGameHeader from 'components/PageGameHeader';
import Metacritic from 'components/Metacritic';
import GameDescription from 'components/GameDescription';
import GameURLS from 'components/GameURLS';
import Stores from 'components/Stores';
import Genres from 'components/Genres';

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
  console.log(data);
  const {
    name,
    background_image: image,
    playtime,
    released,
    parent_platforms: platforms,
    description_raw: description,
    metacritic,
    genres,
  } = data;

  return (
    <div className='h-screen bg-[#151515] shadow-left relative'>
      <div className='container relative z-10 flex flex-col items-center mx-auto mt-20 lg:mt-12'>
        <PageGameHeader
          released={released}
          playtime={playtime}
          platforms={platforms}
          name={name}
        />
        <div className='flex flex-col w-full gap-4 px-4 mt-4 lg:mt-5 lg:flex-row '>
          <GameDescription desc={description} />
          <div className='flex flex-wrap items-center content-start flex-grow order-first gap-4 lg:order-last'>
            <div className='flex items-center justify-center w-full gap-2 lg:flex-wrap xl:flex-nowrap lg:justify-start'>
              <Metacritic meta={metacritic} />
              <Genres genres={genres} />
            </div>
            <Stores />
            <GameURLS />
          </div>
        </div>
      </div>
      <PageBackgroundImage image={image} />
    </div>
  );
};

export default GameDetails;

// opisu gry może nie być, wtedy trzeba rozciągnąć drugi komponent
// metacritic może nie być

// Opis gry
// Rodzaj gry
// Ocena Metacritic
// Link do subredditu, jeśli istnieje
// Link do strony internetowej, jeśli istnieje
// Sklepy, w których można kupić grę
// DLC
// Zrzuty ekranu
// Zwiastuny
// Lore
// zamiast mapowania w komponentach zrób poprawną destrukturyzacje tutaj i przekaż to jak należy xd
