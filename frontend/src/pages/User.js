import React from 'react';
import Navigation from '../components/nav/Navigation';
import Footer from '../components/footer/Footer';
import MainUser from '../components/user-main/MainUser';

const User = () => {
  return (
    <div>
      <Navigation />
      <MainUser />
      <Footer />
    </div>
  );
};

export default User;