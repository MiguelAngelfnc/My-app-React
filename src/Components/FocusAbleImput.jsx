import { useEffect, useRef } from "react"

export function FocusAbleInput(){

    const InputRef=useRef(null)

    useEffect(()=>{
        InputRef.current?.focus()
    },[])

    return(
    <div>
        <h1>textoPrueba</h1>
        <input ref={InputRef} type="text" />
    </div>
    )
}