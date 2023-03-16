// prettier-ignore
import {
  Playstation, Apple, Ios, Linux, Nintendo, Pc, Android, Xbox, Threedo, Atari, Commodore, Web, Sega
} from 'utils/constans';
export const getPlatformIcon = (platformName) => {
  const classes = 'fill-white hover:fill-black';
  switch (platformName) {
    case 'Playstation':
      return <Playstation className={classes} />;
    case 'Apple Macintosh':
      return <Apple className={classes} />;
    case 'iOS':
      return <Ios className={classes} />;
    case 'Linux':
      return <Linux className={classes} />;
    case 'Nintendo':
      return <Nintendo className={classes} />;
    case 'PC':
      return <Pc className={classes} />;
    case 'android':
      return <Android className={classes} />;
    case 'Xbox':
      return <Xbox className={classes} />;
    case '3DO':
      return <Threedo className={classes} />;
    case 'Atari':
      return <Atari className={classes} />;
    case 'Commodore / Amiga':
      return <Commodore className={classes} />;
    case 'Web':
      return <Web className={classes} />;
    case 'SEGA':
      return <Sega className={classes} />;
    default:
      return null;
  }
};
