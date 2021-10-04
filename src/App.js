import './css/App.css';
import React, { useEffect } from 'react';

import WebFont from 'webfontloader';
import Landing2 from './landing2.js';
import Schedule from './schedule.js';
import Quote from './quote.js';
import Register from './register.js';
import Sponsor from './sponsor.js';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Gill Sans']
      }
    });
   }, []);

  return (
    <div className="App">
      <Landing2 />
      <Schedule />
      <Quote />
      <Register />
      <Sponsor />
    </div>
  );
}

export default App;
