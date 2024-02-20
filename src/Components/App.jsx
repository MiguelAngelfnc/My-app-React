import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export function App(){
    return(
        <div>
          <h1>My fantastic Application!</h1>
          <hr />
          <HelloWorld/>
          <hr />
          <Welcome name={"Migue"} age={40} />
        </div>
    )
}