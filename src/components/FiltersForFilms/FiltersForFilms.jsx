import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as AtoZ } from '../../assets/image/sort-az.svg';
import { ReactComponent as ZtoA } from '../../assets/image/sort-za.svg';
import css from './FiltersForFilms.module.scss';

const FiltersForFilms = ({
  handleSortAtoZ,
  handleSortZtoA,
  handleChange,
  handleClickClear,
  searchWord,
}) => {
  const handleChangeInput = e => {
    handleChange(e.target.value);
  };

  return (
    <div className={css.wrapSort}>
      <input
        type="text"
        name="search"
        value={searchWord}
        placeholder="Filter by film name ..."
        onChange={handleChangeInput}
      />
      <button className={css.clearBtn} onClick={handleClickClear} type="button">
        clear
      </button>
      <button onClick={handleSortAtoZ} type="button">
        <AtoZ className={css.sortIcon} />
      </button>
      <button onClick={handleSortZtoA} type="button">
        <ZtoA className={css.sortIcon} />
      </button>
    </div>
  );
};

FiltersForFilms.propTypes = {
  handleSortAtoZ: PropTypes.func.isRequired,
  handleSortZtoA: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClickClear: PropTypes.func.isRequired,
  searchWord: PropTypes.string.isRequired,
};

export default FiltersForFilms;
