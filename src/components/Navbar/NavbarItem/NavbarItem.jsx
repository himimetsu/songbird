import React, { useContext, useRef, useEffect } from 'react';
import { MainContext } from '../../../context/MainContext';
import './NavbarItem.scss';

const NavbarItem = ({ name, section }) => {
  const { currentSection, changeCurrentSection, status } = useContext(MainContext);
  const refNavbar = useRef();
  const classes = ['nav-bar__link'];

  const navItemHandler = () => status === 'warmup' && changeCurrentSection(section);

  section === currentSection && classes.push('nav-bar__link--active');
  status === 'game' && section !== currentSection && classes.push('nav-bar__link--disable');

  useEffect(() => {
    setTimeout(() => {
      status === 'game' && section !== currentSection
        ? refNavbar.current.classList.add('hide')
        : refNavbar.current.classList.remove('hide')
    }, 500);
  }, [status]);

  return (
    <a
      ref={refNavbar}
      className={classes.join(' ')}
      onClick={() => navItemHandler()}
    >
      {name}
    </a>
  );
};

export default NavbarItem;
