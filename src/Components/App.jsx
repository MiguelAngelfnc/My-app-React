

import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Link, Route, Routes } from "react-router-dom";


import { ShowGithubUser } from "./ShowGithubUser";
import { NotFound } from "./NotFound";
import { GithubUserList } from "./GithubUserList";
import { LoginFormUse } from "./LoginFormUse";
import { AlertClock } from "./AlertClock";




export function App() {
  function HandleAlertButtonClick(){
    const now= new Date() 
    alert(`the current time is ${now.toLocaleTimeString()}`)
  }


  return (
   
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">home </Link>
            </li>
            <li>
             <Link to="/Counter">Counter</Link>
            </li>
            <li>
             <Link to="/users">GithubUsers</Link>
            </li>
          </ul>



        </nav>
        <Routes>
          <Route path="/" element={<Welcome name="Migue"/>}/>
          <Route path="Counter" element={<Counter/>} />
          <Route path="users" element={<GithubUserList/>}>
            <Route index element={<p>Add a user and select it</p>}/>
          <Route path=":username" element={<ShowGithubUser/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>

          
        </Routes>

        <h1>LoginFORM</h1>
        <LoginFormUse/>
        <hr />
        <Welcome name={"Migue"} age={50}/>
        <AlertClock onClick={HandleAlertButtonClick}/>
        
       
      </div>
  
  );
}
