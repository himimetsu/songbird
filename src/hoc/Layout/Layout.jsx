import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import './Layout.scss';

const Layout = ({ children }) => {
  const { theme } = useContext(MainContext);

  return (
    <div className='layout' data-theme={theme}>
      <div className='container'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
