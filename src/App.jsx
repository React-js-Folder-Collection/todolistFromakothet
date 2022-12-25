import logo from './logo.svg';
import './App.css';
import Another from './Another';
import { useState } from 'react';
function App() {
  const [count,setcount] = useState(0);
  function increment(){
    // setcount(count+1);
    setcount(prevCount => prevCount + 1);
  }
  function decrement(){
    // setcount(count-1);
    setcount(prevCount => prevCount - 1);
  }
  const ptag={
    background:'blue',
    color:'red',
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Another name='wailinoo'/>
        <div>
          <p>{count}</p>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={ptag}>{3+4}</p>
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
