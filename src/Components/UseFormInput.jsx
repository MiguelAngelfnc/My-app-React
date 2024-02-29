import { useState } from "react";

export function UseFormInput(initualValue=""){
    const[value,setValue]=useState(initualValue);

    function handleChange(event){
        setValue(event.target.value);
    }
    return{
        value:value,
        onChange:handleChange
    };
}

export function LoginForm(){
    const usernameInput= UseFormInput("");
    const passwordInput= UseFormInput("")

 function handleSubmit(event){
    event.preventDefault();
    console.log("Username", usernameInput.value)
    console.log("password", passwordInput.value)
 }



return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username"> username:</label>
            <input type="text" id="username" {...usernameInput} placeholder="enter your username"/>
        </div>
        <div>
        <input type="password" id="password" {...passwordInput} placeholder="enter your password"/>

        </div>
        <button type="submit">submit</button>
    </form>
)}

