import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import App2 from './App2'
import { StateLearning } from './StateInReact';
import Calculator from './Calculator';
import UserDashboard from './UserDashboard';
import Navbar from './Navbar';
import ApiCall from './ApiCall';
import { Excuser } from './Excuser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}

    {/* <StateLearning /> */}

    {/* <Calculator /> */}

    {/* useEffect hook learning & component lifecycle */}
    {/* <UserDashboard />
    <Navbar /> */}

    {/* fetching data  */}
    {/* <ApiCall /> */}
    <Excuser />

  </React.StrictMode>
);


