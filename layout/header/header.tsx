import React from 'react';
import classes from 'styles/layout/header.module.scss';

const Header: React.FC = () => (
  <header className={classes.header}>
    <div className={classes.header__content}>
      <img
        className={classes.header__content_logo}
        src="https://www.airdna.co/images/airdna_indigo_logo.png"
        alt="logo"
      />
    </div>
  </header>
);

export default Header;
