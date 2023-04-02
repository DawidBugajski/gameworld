import { useParams } from 'react-router-dom';
import { useQueries } from '@tanstack/react-query';
import { API_KEY, BASE_URL } from 'utils/constans';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PageBackgroundImage from 'components/PageBackgroundImage';
import PageGameHeader from 'components/PageGameHeader';
import Metacritic from 'components/Metacritic';
import GameDescription from 'components/GameDescription';
import GameURLS from 'components/GameURLS';
import Stores from 'components/Stores';
import Genres from 'components/Genres';
import GameTags from 'components/GameTags';
import Gallery from 'components/Gallery';
import GameDLC from 'components/GameDLC';
import GameSeries from 'components/GameSeries';
import WishlistButton from 'components/WishlistButton';

const GameDetails = () => {
  const { id } = useParams();
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
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
  const gameDLC = gameDlcQuery.data?.results;
  const gameSeries = gameSeriesQuery.data?.results;

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
  const containerWidth = isMenuOpen ? 'lg:w-[65%]' : 'lg:w-full';

  return (
    <div className='bg-[#151515] min-h-screen shadow-left relative'>
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
          <div
            className={`${containerWidth} 2xl:w-full flex flex-col text-sm shrink-0 2xl:text-base basis-2/3 2xl:basis-[60%] min-[1800px]:basis-3/4`}
          >
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
            <WishlistButton name={name} image={image} />
          </div>
        </div>
      </div>
      <PageBackgroundImage image={image} />
      {gameDLC && gameDLC.length !== 0 && <GameDLC dlc={gameDLC} />}
      {gameSeries && gameSeries.length !== 0 && (
        <GameSeries game={gameSeries} />
      )}
    </div>
  );
};

export default GameDetails;
