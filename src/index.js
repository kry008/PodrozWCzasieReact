import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './Calculator'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
    <div id='madeBy'>Made by KRY008 - 2022</div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
