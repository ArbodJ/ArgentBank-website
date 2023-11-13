import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import  './nav.css';
import logo from "../../assets/img/argentBankLogo copy.png"
import { useDispatch, useSelector } from 'react-redux';

const Navigation = () => {
  const token = useSelector((state) => state.user.token);
  const firstName = useSelector((state) => state.user.profile.firstName);
  const lastName = useSelector((state) => state.user.profile.lastName);
  

  return (
    <nav className='main-nav'>
      
      <NavLink to='/' className='main-nav-logo'>
        <img 
          className='main-nav-logo-image' 
          src={logo}
          alt="Argent Bank Logo" 
        />
      </NavLink>

      { !token &&(
        <NavLink to='/sign' className='main-nav-item active'>
        <i className="fa fa-user-circle"></i>
        <span> Sign in</span>
        </NavLink>
      )}
      {token &&(
        <NavLink 
          to='/' 
          className='main-nav-item active' 
        >
        <i className="fa fa-user-circle"></i>
        <span> {firstName} {lastName} </span>
        <i className='fa fa-sign-out'></i>
        <span> Sign out</span>
        </NavLink>
      )}
      
      

    </nav>
  );
};

export default Navigation;