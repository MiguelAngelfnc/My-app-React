import { Age } from "./Age"

export function Welcome({name , age}){
return(
    <div className="Welcome">
    <p>Welcome, <strong>{name}</strong></p>
    <Age age={age}/>
    </div>
)
}