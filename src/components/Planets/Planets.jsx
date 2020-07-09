import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { getStarWarsPlanets } from '../../services/api';

import css from './Planets.module.scss';

const Planets = ({ planets }) => {
  const [infoPlanets, setPlanets] = useState('');

  const getInfoPlanets = () => {
    planets.map(el => {
      getStarWarsPlanets(el)
        .then(p => setPlanets(prev => [...prev, p.data]))
        // eslint-disable-next-line no-console
        .catch(err => console.log(err, 'no planets'));
      return 0;
    });
  };

  useEffect(() => {
    getInfoPlanets();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setPlanets('');
    getInfoPlanets();
    // eslint-disable-next-line
  }, [planets]);

  return (
    <div>
      {infoPlanets && (
        <>
          <h4>planets: </h4>
          <ul className={css.listPlanets}>
            {infoPlanets.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{el.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

Planets.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Planets;
