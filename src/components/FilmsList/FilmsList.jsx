import React from 'react';
import PropTypes from 'prop-types';

import css from './FilmsList.module.scss';

const FilmsList = ({ films, handleEpisodeId, searchWord }) => {
  const filter = (text, el) => {
    if (text === '') {
      return true;
    }
    return el.title.toLowerCase().includes(text.toLowerCase());
  };

  return (
    <>
      {films.length > 0 && (
        <div className={css.wrapTitleFilms}>
          {films.map(el => (
            <div key={el.title}>
              {filter(searchWord, el) && (
                <button
                  className={css.titleFilm}
                  onClick={() => handleEpisodeId(el.episode_id)}
                  type="button"
                >
                  {el.title}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleEpisodeId: PropTypes.func.isRequired,
  searchWord: PropTypes.string.isRequired,
};

export default FilmsList;
