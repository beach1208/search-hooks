import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue')

  function decrementCount(){
    setCount(previousCount => previousCount - 1)
  }

  function incrementCount(){
    setCount(previousCount => previousCount + 1)
    setTheme('red')
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
