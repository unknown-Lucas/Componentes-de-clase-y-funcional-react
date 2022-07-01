import logo from './logo.svg';
import './App.css';
import GreetingF from './pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GreetingF name="Lucas"></GreetingF>
      </header>
    </div>
  );
}

export default App;
