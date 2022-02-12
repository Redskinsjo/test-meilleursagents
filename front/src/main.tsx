import 'front/assets/styles/fonts.scss';
import 'front/assets/styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
);
