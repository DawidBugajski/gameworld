// prettier-ignore
import {
  Playstation, Apple, Ios, Linux, Nintendo, Pc, Android, Xbox, Threedo, Atari, Commodore, Web, Sega, Steam, Gog, GooglePlay, Itch, Epic, PSStore, XboxStore, NintendoStore, AppStore
} from 'utils/constans';
export const getPlatformIcon = (platformName) => {
  const classes = 'fill-white';
  switch (platformName) {
    case 'PlayStation':
      return <Playstation className={classes} />;
    case 'PlayStation Store':
      return <PSStore className={classes} />;
    case 'Apple Macintosh':
      return <Apple className={classes} />;
    case 'App Store':
      return <AppStore className={classes} />;
    case 'iOS':
      return <Ios className={classes} />;
    case 'Linux':
      return <Linux className={classes} />;
    case 'Nintendo':
      return <Nintendo className={classes} />;
    case 'Nintendo Store':
      return <NintendoStore className={classes} />;
    case 'PC':
      return <Pc className={classes} />;
    case 'Android':
      return <Android className={classes} />;
    case 'Xbox':
      return <Xbox className={classes} />;
    case 'Xbox Store':
    case 'Xbox 360 Store':
      return <XboxStore className={classes} />;
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
