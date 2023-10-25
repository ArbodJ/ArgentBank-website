import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sign from './pages/Sign';
import User from './pages/User';
import ErrorPage from './pages/ErrorPage';


const App = () => {
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