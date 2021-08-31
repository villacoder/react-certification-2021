import React from 'react';
import ReactDOM from 'react-dom';

import { Principal } from './Principal';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>,
  document.getElementById('root')
);
