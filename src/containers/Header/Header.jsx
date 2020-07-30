import React from 'react';
import logo from '../../assets/images/logo.png';
import { Navbar } from '../../components';
import { navbarItems } from '../../consts/navbarItems';
import './Header.scss';

const Header = () => {
  return (
    <header className='site-header'>
      <div className='site-header__title site-info'>
        <div className='site-info__logo logo-content'>
          <img className='logo-content__photo' src={logo} alt="logo" />
          <div className='logo-content__text' data-position='1'>Song</div>
          <div className='logo-content__text' data-position='2'>Bird</div>
        </div>

        <div className='site-info__score'>
          Score: 123
        </div>
      </div>

      <Navbar element='site-header' block='site-nav' navbarItems={navbarItems} />
    </header>
  );
};

export default Header;
