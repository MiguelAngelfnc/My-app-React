import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){

const[InputValue,setInputValue]=useState("")

function HandleInputValue(event){
const value=event.target.value
setInputValue(value)
}

    return(
        <div>
            <input 
            type="text"
            value={InputValue}
            onChange={HandleInputValue} />
            <Welcome name={InputValue}/>
        </div>
    )

}