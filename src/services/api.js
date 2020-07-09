import axios from 'axios';

export const getStarWarsFilms = () => axios.get('http://swapi.dev/api/films/');
export const getStarWarsPlanets = url => axios.get(url);
export const getStarWarsStarships = url => axios.get(url);
