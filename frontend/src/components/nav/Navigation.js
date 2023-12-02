import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import  './nav.css';
import logo from "../../assets/img/argentBankLogo_11zon.webp";
import { useDispatch, useSelector } from 'react-redux';


const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);
  const userName = useSelector((state) => state.user.profile.userName);
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }
  
  return (
    <nav className='main-nav'>
      
      <NavLink to='/' className='main-nav-logo'>
        <img 
          className='main-nav-logo-image' 
          src={logo}
          alt="Argent Bank Logo" 
        />
      </NavLink>
      
      { !token ? (
        <NavLink to='/sign' className='main-nav-item active'>
        <i className="fa fa-user-circle"></i>
        <span> Sign in</span>
        </NavLink>
        ) : (
        <NavLink 
          to='/' 
          className='main-nav-item active' 
        >
        <i className="fa fa-user-circle"></i>
        <span> {userName} </span>
        <i className='fa fa-sign-out'></i>
        <span onClick={logout}> Sign out</span>
        </NavLink>
      )}
    
    </nav>
  );
};

export default Navigation;