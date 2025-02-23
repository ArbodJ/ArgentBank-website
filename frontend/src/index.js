// REACT
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// REDUX
import { Provider } from 'react-redux';
import store from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <App />
  </Provider>

);