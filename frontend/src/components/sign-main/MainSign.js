import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './main-sign.css';
import { useDispatch } from 'react-redux';
import { getToken, setProfile } from '../../reducers/users.reducer';
import { useNavigate } from 'react-router-dom';

const MainSign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/user/login", 
        {
          email: email,
          password: password
        }
      )
      .then((res)=> {
        localStorage.token=res.data.body.token;
        console.log(res.data)
        dispatch(getToken(res.data.body.token));
        axios.post("http://localhost:3001/api/v1/user/profile",
          null,{
            headers: {
              "Authorization":`Bearer ${res.data.body.token}`
            }
          }
        ).then(res=>{
          console.log(res.data);
          dispatch(setProfile(res.data.body));
          navigate("/user");
        })
        .catch(error=>{
          console.log(error)
        })
      })
      .catch(error=>{
        console.log(error)
      })
  }

  const changeEmail = (event)=> {
    setEmail(event.target.value);
  }
  const changePassword = (event)=> {
    setPassword(event.target.value);
  }



  return (
    <div className='main-div'>
      <main className='main bg-dark'>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(event)=>login(event)}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input 
                type="text"
                id="email"
                onChange={(event)=> changeEmail(event)}  />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                onChange={(event)=> changePassword(event)}
                /> 
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remenber-me" />
              <label htmlFor="remenber-me">Remenber me</label>
            </div>
            <div className="link-page">
              <button className="sign-in-button" type="submit">Sign In</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default MainSign;