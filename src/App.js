import './App.css';
//import Pointer from './Pointer.js';
import Clock from './Clock.js';

function App() {
  return (
    <div className="more-extern-clock">
      <div className="clock">Clock</div>
      <Clock />
      <p className="creator">Created by <a href="https://www.github.com/josueamaral15">Josué Amaral</a></p>
    </div>
  );
}

export default App;
