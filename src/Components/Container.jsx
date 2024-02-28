import { useState } from "react"

export function Container({title,children}){
    const [collapsed,setCollapsed]=useState(false)
    function handleToogle(){
    setCollapsed(p=>!p)
    }

    return(
        <div className="App">
            <div className="App-title">{title}  <button onClick={handleToogle}>toggle</button></div>
           {collapsed && <div className="App-content">{children}</div>}
            
            </div>
    )
}