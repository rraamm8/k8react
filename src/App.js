import clock from './clock.png';
import './App.css';
import MyClockTime from './01/MyClockTime';
import MyClock from './02/MyClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clock} className="App-logo" alt="logo" />
        <MyClockTime />
        <MyClock />
      </header>
    </div>
  );
}

export default App;
