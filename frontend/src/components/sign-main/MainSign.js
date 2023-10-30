import React from 'react';
import { NavLink } from 'react-router-dom';
import './main-sign.css';

const MainSign = () => {
  return (
    <div className='main-div'>
      <main className='main bg-dark'>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form action="">
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remenber-me" />
              <label htmlFor="remenber-me">Remenber me</label>
            </div>
            <NavLink to='/user' className='link-page'>
              <button className="sign-in-button">Sign In</button>
            </NavLink>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MainSign;