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
import GameTags from 'components/GameTags';

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
    stores,
    reddit_url: reddit,
    website,
    tags,
  } = data;

  console.log(description);
  const justifyFlex =
    description !== '' ? 'justify-start' : 'justify-center lg:justify-center';

  return (
    <div className='bg-[#151515] min-h-screen shadow-left relative pb-4'>
      <div className='container relative z-10 flex flex-col items-center mx-auto mt-20 lg:mt-12'>
        <PageGameHeader
          released={released}
          playtime={playtime}
          platforms={platforms}
          name={name}
        />
        <div
          className={`flex flex-col w-full gap-2 px-4 mt-4 lg:gap-4 lg:mt-5 lg:flex-row ${justifyFlex}`}
        >
          <GameDescription desc={description} />
          <div className='flex flex-wrap items-center content-start order-first gap-4 lg:order-last'>
            <div className='flex items-center justify-center w-full gap-2 lg:flex-wrap xl:flex-nowrap lg:justify-start'>
              <Metacritic meta={metacritic} />
              <Genres genres={genres} />
            </div>
            <Stores stores={stores} />
            <GameURLS website={website} reddit={reddit} />
            <GameTags tags={tags} />
          </div>
        </div>
      </div>
      <PageBackgroundImage image={image} />
    </div>
  );
};

export default GameDetails;

// Zrzuty ekranu
// DLC
// Zwiastuny
// Lore

// description_raw !== ''
