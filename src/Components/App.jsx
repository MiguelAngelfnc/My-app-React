
import { AlertClock } from "./AlertClock";
import { CheckMounted } from "./CheckMounted";
import { Clock } from "./Clock";
import { Colors } from "./Colors";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { FocusAbleInput } from "./FocusAbleImput";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { MouseClicker } from "./MouseClicker";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";
import { LoginForm,  } from "./UseFormInput";
import { useCurrentLocation } from "./UseCurrentLocation";
import { useEffect } from "react";




export function App() {

  const{location, loading, error, getCurrentLocation}= useCurrentLocation();

  useEffect(()=>{
    if(location){
      console.log("current location:" , location);
    }
    if(error){
      console.log("Error getting current location", error);
    }
  },[location,error]
  );


  const colors = [
    { id: 1, name: "Red" },
    { id: 2, name: "Green" },
    { id: 3, name: "Blue" },
  ];



  function handleLoging(data) {
    console.log("datos de inicio de sesion:", data);
  }

  return (
   
      <div>
        <Container title={<h1>My fantastic Application!</h1>}>
          <hr />
          <HelloWorld />
          <hr />
          <Welcome name={"Migue"} age={40} />
          <hr />
          <hr />
          <GithubUser username="gianmarcotoso"/>
          <hr />
          <hr />
          <GithubUsers/>
          <hr />
          <AlertClock />
          <p>este es mi contador</p>
          <Counter />
          <hr />
          <LoginForm/>
          <hr />
          <hr />
          <div>
            {loading ? (
              <p>Loading.....</p>
            ): error ?(
              <p>Error:{error}</p>
            ):(
              <p>current location:{location.latitude}, {location.longitude}</p>
            )}
            <button onClick={getCurrentLocation}>Get current location</button>
          </div>
          
          <hr />

          <Clock />
          <hr />
          <MouseClicker />
          <hr />
          <InteractiveWelcome />
          <hr />
          <Login onLoging={handleLoging} />
          <hr />
          <UncontrolledLogin />
          <hr />
          <FocusAbleInput />
          <hr />
          <CheckMounted />
          <hr />
          <Colors colors={colors} />
          <hr />
          <TodoList />
        </Container>
      </div>
  
  );
}
