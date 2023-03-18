import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_KEY, BASE_URL } from 'utils/constans';
import PageBackgroundImage from 'components/PageBackgroundImage';
import PageGameHeader from 'components/PageGameHeader';

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
        <div className='flex gap-4 mt-4'>
          <p className='text-white bg-black basis-2/3'>
            OPIS GIERY:{description}
          </p>
          <div className='flex flex-col flex-grow text-black bg-white'>
            <div className='flex'>
              <p className='bg-purple-300 basis-1/6'>METACRITIC COMPONENT</p>
              <p className='flex-grow bg-slate-400'>
                GENRES_NAME - KATEGORIE GIERY
              </p>
            </div>
            <p className='flex-grow bg-orange-300'>STORSY</p>
            <p>WEBSITE</p>
            <p>REDDIT URL</p>
          </div>
        </div>
      </div>
      <PageBackgroundImage image={image} />
    </div>
  );
};

export default GameDetails;

// What else should i add:
// description_raw (if exist)
// genres_name - rodzaj giery
// metacritic
// reddit_url (if exist)
// stores
// website
// /games/{game_pk}/parent-games - dlc
// /games/{game_pk}/screenshots - screenshots
// /games/{id}/movies - trailers
// /games/{game_pk}/game-series - lore

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
