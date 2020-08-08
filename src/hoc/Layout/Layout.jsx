import React from 'react';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='container'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
