import React from 'react';
import logo from '../../assets/image/logo.png';

import css from './Header.module.scss';

const Header = () => {
  return (
    <div className={css.wrapHeader}>
      <img className={css.logo} src={logo} alt="logo" />
    </div>
  );
};

export default Header;
