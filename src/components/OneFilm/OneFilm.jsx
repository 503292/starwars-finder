import React from 'react';
import PropTypes from 'prop-types';

import Starships from '../Starships/Starships';
import Planets from '../Planets/Planets';

import css from './OneFilm.module.scss';

const OneFilm = ({ episodeId, films }) => {
  let oneFilm;

  const findOneFilm = () => {
    oneFilm = films.find(el => (episodeId !== el.episode_id ? '' : el));
  };
  findOneFilm();

  return (
    <div className={css.wrapOneFilm}>
      <h3>
        {oneFilm.title} ({oneFilm.episode_id}part)
      </h3>

      <h4>
        director: <span>{oneFilm.director}</span>
      </h4>
      <h4>
        producers: <span>{oneFilm.producer}</span>
      </h4>
      <h4 className={css.descriptions}>
        descriptions: <span>{oneFilm.opening_crawl}</span>
      </h4>
      <h4>
        release date: <span>{oneFilm.release_date}</span>
      </h4>

      <div className={css.wrapListsItems}>
        <Starships starships={oneFilm.starships} />
        <Planets planets={oneFilm.planets} />
      </div>
    </div>
  );
};

OneFilm.propTypes = {
  episodeId: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default OneFilm;
