import React, { useEffect, useState } from 'react';

import Header from './Header/Header';
import FilmsList from './FilmsList/FilmsList';
import FiltersForFilms from './FiltersForFilms/FiltersForFilms';
import OneFilm from './OneFilm/OneFilm';
import { getStarWarsFilms } from '../services/api';

import css from './App.module.scss';

const App = () => {
  const [films, setFilms] = useState([]);

  const [episodeId, setEpisodeId] = useState('');
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    getStarWarsFilms()
      .then(data => {
        const dataFilms = data.data.results;
        setFilms(dataFilms);
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err, 'Problem with server'));
  }, []);

  const handleSortAtoZ = () => {
    const sort = films
      .slice()
      .sort((start, next) => (start.title > next.title ? 1 : -1));
    setFilms(sort);
  };
  const handleSortZtoA = () => {
    const sort = films
      .slice()
      .sort((start, next) => (start.title < next.title ? 1 : -1));
    setFilms(sort);
  };

  const handleEpisodeId = id => {
    setEpisodeId(id);
  };
  const handleChange = text => {
    setSearchWord(text);
    if (episodeId) {
      setEpisodeId('');
    }
  };

  const handleClickClear = () => {
    setSearchWord('');
  };

  return (
    <div>
      <header className={css.wrapHeader}>
        <Header />
      </header>
      <main className={css.container}>
        <FiltersForFilms
          handleSortAtoZ={handleSortAtoZ}
          handleSortZtoA={handleSortZtoA}
          handleChange={handleChange}
          searchWord={searchWord}
          handleClickClear={handleClickClear}
        />
        <FilmsList
          films={films}
          handleEpisodeId={handleEpisodeId}
          searchWord={searchWord}
        />
        {episodeId && <OneFilm episodeId={episodeId} films={films} />}
      </main>
    </div>
  );
};
export default App;
