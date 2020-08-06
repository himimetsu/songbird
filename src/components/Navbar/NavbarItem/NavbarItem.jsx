import React, { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import './NavbarItem.scss';

const NavbarItem = ({ name, section }) => {
  const { currentSection } = useContext(MainContext);
  const classes = ['nav-bar__link'];

  section === currentSection && classes.push('nav-bar__link--active');

  return (
    <a className={classes.join(' ')}>
      {name}
    </a>
  );
};

export default NavbarItem;
