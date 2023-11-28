import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  const incrementCounter=()=> {
    setCount(count+1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Counter App with Button</h1>
       
        <p>Counter Value:{count}</p>
         
        <button onClick={incrementCounter}>incrementCounter</button>
      </header>
    </div>
  );
}

export default App;
