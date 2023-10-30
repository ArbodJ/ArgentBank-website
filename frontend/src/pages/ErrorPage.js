import React from 'react';
import Navigation from '../components/nav/Navigation';
import Footer from '../components/footer/Footer';

const ErrorPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Err:404 page not found</h1>
      <p>Eh ben alors, on fait des bétises !!!</p>
      <Footer />
    </div>
  );
};

export default ErrorPage;