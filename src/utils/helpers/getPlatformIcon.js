// prettier-ignore
import {
  Playstation, Apple, Ios, Linux, Nintendo, Pc, Android, Xbox, Threedo, Atari, Commodore, Web, Sega, Steam, Gog, GooglePlay, Itch, Epic
} from 'utils/constans';
export const getPlatformIcon = (platformName) => {
  const classes = 'fill-white hover:fill-black';
  switch (platformName) {
    case 'PlayStation':
    case 'PlayStation Store':
      return <Playstation className={classes} />;
    case 'Apple Macintosh':
    case 'Apple Store':
      return <Apple className={classes} />;
    case 'iOS':
      return <Ios className={classes} />;
    case 'Linux':
      return <Linux className={classes} />;
    case 'Nintendo':
    case 'Nintendo Store':
      return <Nintendo className={classes} />;
    case 'PC':
      return <Pc className={classes} />;
    case 'android':
      return <Android className={classes} />;
    case 'Xbox':
    case 'Xbox Store':
    case 'Xbox 360 Store':
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
    case 'Steam':
      return <Steam className={classes} />;
    case 'GOG':
      return <Gog className={classes} />;
    case 'Google Play':
      return <GooglePlay className={classes} />;
    case 'itch.io':
      return <Itch className={classes} />;
    case 'Epic Games':
      return <Epic className={classes} />;
    default:
      return null;
  }
};
