import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export function App(){
   
  function handleLoging(data){
    console.log("datos de inicio de sesion:", data);
  }

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
          <hr />
          <InteractiveWelcome/>
          <hr />
          <Login onLoging={handleLoging}/>
          <hr />
          <UncontrolledLogin/>
          
        </div>
    )
}