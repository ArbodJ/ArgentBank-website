import React from 'react';
import Navigation from '../components/nav/Navigation';
import Footer from '../components/footer/Footer';
import MainSign from '../components/sign-main/MainSign';
import '../index.css';

const Sign = () => {
  return (
    <div>
      <Navigation />
      <MainSign />
      <Footer />
    </div>
  );
};

export default Sign;