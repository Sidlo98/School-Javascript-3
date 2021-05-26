import './App.css';
import { useState } from 'react'
function App() {
  const [counter, setCounter] = useState(0);

  // let counter = 0;

  const increment = () => {
    // counter++;
    setCounter(counter + 1);
    setCounter(prev => prev + 1);
    console.log(counter);
  }
  
  const decrement = () => {
    // counter--;
    setCounter(counter - 1);
    setCounter(prev => prev - 1);
    console.log(counter);
  }

  return (
    <div>
      <h1>{ counter }</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
