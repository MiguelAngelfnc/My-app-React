import { useState } from "react";
import classes from "./TodoList.module.scss"

export function TodoList(){
    const [todos,setTodos]=useState(["hola"]);

    const [inputValue,setInputValue]=useState("")

    function handleInputChange(event){
        setInputValue(event.target.value)
    }

    function handleStringButton(){
        if(inputValue.trim()!==""){
        setTodos([...todos,inputValue])}
        setInputValue("")

    }
    function handleResetButton(){
        setTodos([])
    }

    function handleRemoveButton(index){
      const nuevoContenido= todos.filter((_,i)=> i !== index)
        setTodos(nuevoContenido)
    }



    return(
        <div>
            <ul>
            {todos.map((nombre,index)=>(
                <li key={index}>
                    {nombre}
                    <button className={classes.button} onClick={()=> handleRemoveButton(index)}>remove!</button>
                </li>
            ))}
                

            </ul>
            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button className={classes.button} onClick={handleStringButton} > pulse aqui</button>
            <button className={classes.button} onClick={handleResetButton} >Reset</button>
        </div>
    )
}