import { useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
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
import Gallery from 'components/Gallery';

const GameDetails = () => {
  const { id } = useParams();

  const getGameData = (endpoint) => () =>
    axios
      .get(`${BASE_URL}/${id}/${endpoint}?key=${API_KEY}`)
      .then((res) => res.data);

  const [
    gameDetailsQuery,
    gameScreenshotsQuery,
    gameDlcQuery,
    gameSeriesQuery,
  ] = useQueries({
    queries: [
      {
        queryKey: ['gameDetails', id],
        queryFn: () =>
          axios.get(`${BASE_URL}/${id}?key=${API_KEY}`).then((res) => res.data),
      },
      {
        queryKey: ['gameScreenshots', id],
        queryFn: getGameData('screenshots'),
      },
      { queryKey: ['gameDlc', id], queryFn: getGameData('additions') },
      { queryKey: ['gameSeries', id], queryFn: getGameData('game-series') },
    ],
  });

  if (gameDetailsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (gameDetailsQuery.isError) {
    return <div>Error: {gameDetailsQuery.error.message}</div>;
  }

  const gameDetails = gameDetailsQuery.data;
  const gameScreenshots = gameScreenshotsQuery.data?.results?.map(
    ({ image }) => image
  );

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
  } = gameDetails;

  const justifyFlex = description !== '' ? 'justify-start' : 'justify-center';

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
          className={`flex flex-col w-full gap-2 px-4 mt-4 lg:gap-6 lg:mt-5 lg:flex-row ${justifyFlex}`}
        >
          <div className='flex flex-col text-sm shrink-0 2xl:text-base 2xl:basis-3/4 basis-2/3'>
            <GameDescription desc={description} />
            <Gallery screenshots={gameScreenshots} />
          </div>

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

// https://www.js-howto.com/how-to-handle-multiple-queries-with-react-query/
