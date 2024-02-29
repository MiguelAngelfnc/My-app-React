import { useEffect ,useRef } from "react";
import { useCounter } from "./useCounter";

export function CounterDisplay({count}){
    return <h2> Counter: {count}</h2>;
}

export function Counter({initialValue=0}){
    const {counter, onIncrement, onDecrement,onReset}= useCounter(initialValue)
    const directionRef=useRef(null)

   useEffect(()=>{
    console.log(`el valor actual es ${counter} `)

    if(counter>initialValue){
      directionRef.current="up";}
      else if(counter<initialValue){
        directionRef.current="down"
      }
      if(directionRef.current!== null){
        console.log(`direccion de cambio${directionRef.current}`);
      }
    
   },[Counter, initialValue])






  return (
    <div>
        <CounterDisplay count={counter}/>

        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onReset}>Reset</button>
    </div>
 )
}