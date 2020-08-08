import React from 'react';
import NavbarItem from './NavbarItem/NavbarItem';
import './Navbar.scss';

const Navbar = ({ navbarItems }) => {
  const renderNavbarItems = () => navbarItems.map((item) => (
    <NavbarItem {...item} key={item.id} />
  ));

  return (
    <nav className='nav-bar'>
      {renderNavbarItems()}
    </nav>
  );
};

export default Navbar;
