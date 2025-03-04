import { useEffect, useState } from 'react';
import './App.css';

function App() 
{
  const [count , setCount] = useState(0);
  useEffect(()=>{
    console.log(count);
  },[count])

  const incrementCount = () =>{
    setCount((count)=>count+1)
  }
  return (
    <>
    <h1>Count is :{count}</h1>
    <button onClick={incrementCount}>Increase</button>

    </>
  );
}

export default App;
