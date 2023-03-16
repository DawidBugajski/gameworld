// prettier-ignore
import {
  Playstation, Apple, Ios, Linux, Nintendo, Pc, Android, Xbox, Threedo, Atari, Commodore, Web, Sega
} from 'utils/constans';
export const getPlatformIcon = (platformName) => {
  switch (platformName) {
    case 'Playstation':
      return <Playstation />;
    case 'Apple Macintosh':
      return <Apple />;
    case 'iOS':
      return <Ios />;
    case 'Linux':
      return <Linux />;
    case 'Nintendo':
      return <Nintendo />;
    case 'PC':
      return <Pc />;
    case 'android':
      return <Android />;
    case 'Xbox':
      return <Xbox />;
    case '3DO':
      return <Threedo />;
    case 'Atari':
      return <Atari />;
    case 'Commodore / Amiga':
      return <Commodore />;
    case 'Web':
      return <Web />;
    case 'SEGA':
      return <Sega />;
    default:
      return null;
  }
};
