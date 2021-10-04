import './css/App.css';
import Landing from './landing.js';
import Schedule from './schedule.js';
import Quote from './quote.js';
import Register from './register.js';
import Sponsor from './sponsor.js';

function App() {
  return (
    <div className="App">
      <Landing />
      <Schedule />
      <Quote />
      <Register />
      <Sponsor />
    </div>
  );
}

export default App;
