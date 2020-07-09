import React from 'react';
import errorDartVeider from '../../assets/image/error-dart-veider.gif';

import css from './Error.module.scss';

const Error = () => {
  return (
    <div className={css.wrapError}>
      <img src={errorDartVeider} alt="error" />
      <div className={css.wrapDescription}>
        <h2>Too Many Requests</h2>
        <p>429 </p>
      </div>
    </div>
  );
};

export default Error;
