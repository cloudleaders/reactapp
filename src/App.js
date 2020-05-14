import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Button from './Button';
import Football from './Football';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <title> First React App</title>	  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> part-2 and save to reload.
	  Added Title to the App.
	  <div>
	  <button onClick={Football.shoot} > Take a Shot! </button>
	  </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
