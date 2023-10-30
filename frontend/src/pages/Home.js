import React from 'react';
import Navigation from '../components/nav/Navigation';
import Footer from '../components/footer/Footer';
import MainHome from '../components/home_main/MainHome';
import '../index.css';

const Home = () => {
  return (
    <div>
      <Navigation />
      <MainHome />
      <Footer />
    </div>
  );
};

export default Home;