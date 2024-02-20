import { useState } from "react";

export function CounterDisplay({count}){
    return <h2> Counter: {count}</h2>;
}

export function Counter({initialValue=0}){
    const [CounterValue,setCounterValue]= useState(initialValue)


  function handleCounterIncrement(){
    setCounterValue((c)=> c + 1)
  }

  function handleCounterDecrement(){
    setCounterValue((c)=> c - 1)
  }

  function handleCounterReset(){
    setCounterValue(initialValue)
  }
  return (
    <div>
        <CounterDisplay count={CounterValue}/>

        <button onClick={handleCounterIncrement}>Increment</button>
        <button onClick={handleCounterDecrement}>Decrement</button>
        <button onClick={handleCounterReset}>Reset</button>
    </div>
 )
}