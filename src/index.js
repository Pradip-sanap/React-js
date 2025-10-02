import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import App2 from './App2'
import { StateLearning } from './StateInReact';
import Calculator from './Calculator';
import UserDashboard from './UserDashboard';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2 /> */}

    {/* <StateLearning /> */}

    {/* <Calculator /> */}

    {/* useEffect hook learning & component lifecycle */}
    <UserDashboard />
    <Navbar />
  </React.StrictMode>
);


