import { useState } from "react";

export function UseFormInput(initualValue=""){
    const[username,setUsername]=useState(initualValue);
    const[password,setPassword]=useState(initualValue);

    const handleUsernameChange=(event)=>{
        setUsername(event.target.value);
    }

    const handlePasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    
    return{
        username,
        password,
        handlePasswordChange,
        handleUsernameChange
    };
}

