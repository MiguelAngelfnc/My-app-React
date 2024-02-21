import { useEffect, useRef } from "react"

export function CheckMounted(){
 
 const MountedRef=useRef(false)
 
 useEffect(()=>{
    if (MountedRef.current===false){
        MountedRef.current=true;
        console.log("Mounted for first time")}
        else{
            console.log("Mounted for debug checking")}
        },[])
    return


    
}