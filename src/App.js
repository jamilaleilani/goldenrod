import './css/App.css';
import React, { useEffect } from 'react';

import WebFont from 'webfontloader';
import Landing2 from './landing2.js';
import Schedule from './schedule.js';
import Quote from './quote.js';
import Register from './register.js';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['courier']
      }
    });
   }, []);

  return (
    <div className="App">
      <Landing2 />
      <Schedule />
      <Quote />
      <Register />
    </div>
  );
}

export default App;
