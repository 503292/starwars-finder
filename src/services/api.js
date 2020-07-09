import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';

export const getStarWarsFilms = () =>
  axios.get(`${proxy}http://swapi.dev/api/films/`);
export const getStarWarsPlanets = url => axios.get(`${proxy}${url}`);
export const getStarWarsStarships = url => axios.get(`${proxy}${url}`);
