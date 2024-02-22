import { useState , useEffect} from "react"

export function Clock(){

const [date, setDate]= useState(new Date())

useEffect(()=>{
 const intervalo=setInterval(()=>{setDate(new Date())},1000)

 
},[])

return(
    <div className="Clock">
        <h2>the current time is {date.toLocaleTimeString()}</h2>
    </div>
)
}