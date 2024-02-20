import { useState } from "react"

export function Login({onLoging}){
    const[data,setData]=useState({
        username: "",
        password:"",
        remember:false
    })

    function HandleData(event){
        const name=event.target.name
        const value=event.target.value
        const type=event.target.type 
        const checked= event.target.checked 

        setData(prevData=>({
            ...prevData,[name]:type==="checkbox" ? checked : value})
          
        )
        console.log("Remember:",data.remember);
    }

    function HandleLogin(event){
        event.preventDefault();
        onLoging(data)
        console.log(data)
    }

    function HandleReset(){
        setData({
            username:"",
            password:"",
            remember:false
        })
        

    }


    return(
    <div>
        <form onSubmit={HandleLogin}>
            <input name="username" value={data.username} type="text" onChange={HandleData} />
            <input name="password" value={data.password} type="password" onChange={HandleData} />
            <input name="remember" checked={data.remember} type="checkbox" onChange={HandleData}  />
            <button name="login" disabled={!data.username || !data.password } onClick={HandleLogin} > login</button>
            <button name="reset " onClick={HandleReset} >Reset</button>
        </form>
    </div>
    )
}