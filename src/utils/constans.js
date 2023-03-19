import { getNextDay } from './helpers/getNextDay';

export const API_KEY = '76cb8b2b755e459baa2b0262c9aadfef';
export const BASE_URL = 'https://api.rawg.io/api/games';
export const PREMIERE_GAMES_URL = `${BASE_URL}?dates=${getNextDay()},2024-12-31&ordering=-rating&key=${API_KEY}&page_size=10`;

// Svg
export { ReactComponent as Playstation } from '../assets/svg/playstation.svg';
export { ReactComponent as Apple } from '../assets/svg/apple.svg';
export { ReactComponent as Ios } from '../assets/svg/ios.svg';
export { ReactComponent as Linux } from '../assets/svg/linux.svg';
export { ReactComponent as Nintendo } from '../assets/svg/nintendo.svg';
export { ReactComponent as Pc } from '../assets/svg/pc.svg';
export { ReactComponent as Android } from '../assets/svg/android.svg';
export { ReactComponent as Xbox } from '../assets/svg/xbox.svg';
export { ReactComponent as Threedo } from '../assets/svg/3do.svg';
export { ReactComponent as Atari } from '../assets/svg/atari.svg';
export { ReactComponent as Commodore } from '../assets/svg/commodore-amiga.svg';
export { ReactComponent as Web } from '../assets/svg/web.svg';
export { ReactComponent as Sega } from '../assets/svg/sega.svg';
export { ReactComponent as GooglePlay } from '../assets/svg/google-play.svg';
export { ReactComponent as Epic } from '../assets/svg/epic-games.svg';
export { ReactComponent as AppStore } from '../assets/svg/appstore.svg';
export { ReactComponent as Gog } from '../assets/svg/gog.svg';
export { ReactComponent as Itch } from '../assets/svg/itch.svg';
export { ReactComponent as Steam } from '../assets/svg/steam.svg';
export { ReactComponent as PSStore } from '../assets/svg/ps_store.svg';
export { ReactComponent as XboxStore } from '../assets/svg/xbox_store.svg';
export { ReactComponent as NintendoStore } from '../assets/svg/nintendo_store.svg';
