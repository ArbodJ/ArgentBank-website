import React from 'react';
import { NavLink } from 'react-router-dom';
import  './nav.css';

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <NavLink to='/' className='main-nav-logo'>
        <img 
          className='main-nav-logo-image' 
          src="../assets/img/argentBankLogo copy.png" 
          alt="Argent Bank Logo" 
        />
      </NavLink>

    </nav>
  );
};

export default Navigation;