import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import App2 from './App2'
import { StateLearning } from './StateInReact';
import Calculator from './Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}

    {/* <StateLearning /> */}

    <Calculator />
  </React.StrictMode>
);


