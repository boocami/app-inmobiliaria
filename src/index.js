import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';

import store from './Service/store';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Si quieres empezar a medir el rendimiento en tu aplicación, pasa una función
// para registrar los resultados (por ejemplo: reportWebVitals(console.log))
// o enviar a un endpoint de análisis. Más información: https://bit.ly/CRA-vitals
reportWebVitals();
