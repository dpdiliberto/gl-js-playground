import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import App from './Components/index.js';
import {Provider} from './Context';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
