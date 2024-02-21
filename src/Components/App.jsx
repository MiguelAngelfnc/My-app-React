import { AlertClock } from "./AlertClock";
import { CheckMounted } from "./CheckMounted";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusAbleInput } from "./FocusAbleImput";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";



export function App(){

  const colors=[
    {id: 1, name:"Red"},
    {id:2,name:"Green"},
    {id:3,name:"Blue"}
  ]
   
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
          <hr />
          <FocusAbleInput/>
          <hr />
          <CheckMounted/>
          <hr />
          <Colors colors={colors}/>
          
          
        </div>
    )
}