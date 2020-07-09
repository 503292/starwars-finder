import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { getStarWarsStarships } from '../../services/api';
import css from './Starshop.module.scss';

const Starships = ({ starships }) => {
  const [infoStarship, setStarship] = useState('');

  const getinfoStarship = () => {
    starships.map(el => {
      getStarWarsStarships(el)
        .then(s => setStarship(prev => [...prev, s.data]))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err, 'no starships'));
      return 0;
    });
  };

  useEffect(() => {
    getinfoStarship();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setStarship('');

    getinfoStarship();
    // eslint-disable-next-line
  }, [starships]);

  return (
    <div>
      {infoStarship && (
        <>
          <h4>starships: </h4>
          <ul className={css.listStarships}>
            {infoStarship.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{el.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

Starships.propTypes = {
  starships: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Starships;
