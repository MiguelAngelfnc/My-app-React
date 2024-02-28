import { useEffect, useState } from "react"

export function GithubUser({username}){
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then(response =>{return response.json()})
        .then(json=>{
            console.log(json)
            setData(json)

        })

    },[username])
    

    return(
   <div>
{data && (
<div>
<h1> {data.name} </h1>
 <img src={data.avatar_url} alt="User Avatar"/>
 <p>Login:{data.login}</p>
   </div>)}
   </div>

    )

}