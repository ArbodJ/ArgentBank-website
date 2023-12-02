import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sign from './pages/Sign';
import User from './pages/User';
import ErrorPage from './pages/ErrorPage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProfile, getToken } from './reducers/users.reducer';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    if(localStorage.token) {
      const token = localStorage.token
      dispatch(getToken(localStorage.token));
      axios.post("http://localhost:3001/api/v1/user/profile",
        null,{
          headers: {
            "Authorization":`Bearer ${localStorage.token}`
          }
        }
      ).then(res=>{
        console.log(res.data);
        dispatch(setProfile(res.data.body));
      })
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/user' element={<User />} />
        <Route path='*'  element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;