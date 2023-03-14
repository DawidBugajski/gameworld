import { getNextDay } from './helpers/getNextDay';

export const API_KEY = '76cb8b2b755e459baa2b0262c9aadfef';
export const BASE_URL = 'https://api.rawg.io/api/games';
export const PREMIERE_GAMES_URL = `${BASE_URL}?dates=${getNextDay()},2024-12-31&ordering=-rating&key=${API_KEY}&page_size=10`;
