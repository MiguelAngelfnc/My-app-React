import { useState } from "react";
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




export function App() {
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
