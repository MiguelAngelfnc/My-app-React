import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { MouseClicker } from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App(){
    return(
        <div>
          <h1>My fantastic Application!</h1>
          <hr />
          <HelloWorld/>
          <hr />
          <Welcome name={"Migue"} age={40} />
          <hr />
          <AlertClock/>
          <p>este es mi contador</p>
          <Counter/>
          <hr />
          <Clock/>
          <hr />
          <MouseClicker/>
          
        </div>
    )
}