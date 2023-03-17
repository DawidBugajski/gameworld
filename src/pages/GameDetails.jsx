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
  } = data;

  return (
    <div className='h-screen bg-[#151515] shadow-left relative'>
      <div className='relative z-10 flex flex-col items-center mt-20 lg:mt-12'>
        <PageGameHeader
          released={released}
          playtime={playtime}
          platforms={platforms}
          name={name}
        />
      </div>
      <PageBackgroundImage image={image} />
    </div>
  );
};

export default GameDetails;
