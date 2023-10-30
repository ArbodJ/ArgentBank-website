import React from 'react';
import { NavLink } from 'react-router-dom';
import  './nav.css';
import logo from "../../assets/img/argentBankLogo copy.png"

const Navigation = () => {
  return (
    <nav className='main-nav'>
      <NavLink to='/' className='main-nav-logo'>
        <img 
          className='main-nav-logo-image' 
          src={logo}
          alt="Argent Bank Logo" 
        />
      </NavLink>
      <NavLink to='/sign' className='main-nav-item active'>
      <i className="fa fa-user-circle"></i>
      <span> Sign in</span>
      </NavLink>
    </nav>
  );
};

export default Navigation;