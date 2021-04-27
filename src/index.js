import React from 'react'
import ReactDOM from 'react-dom';

import Routes from './Routes';
import '@styles/main.scss';

ReactDOM.render(
  <div className={'dark-theme'}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
);