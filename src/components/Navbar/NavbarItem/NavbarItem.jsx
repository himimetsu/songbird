import React, { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import './NavbarItem.scss';

const NavbarItem = ({ name, section }) => {
  const { currentSection, changeCurrentSection, status } = useContext(MainContext);
  const classes = ['nav-bar__link'];

  const navItemHandler = () => status === 'warmup' && changeCurrentSection(section);

  section === currentSection && classes.push('nav-bar__link--active');

  return (
    <a
      className={classes.join(' ')}
      onClick={() => navItemHandler()}
    >
      {name}
    </a>
  );
};

export default NavbarItem;
