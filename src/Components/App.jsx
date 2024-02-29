

import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { Link, Route, Routes } from "react-router-dom";

import { GithubUsers } from "./GithubUsers";
import { ShowGithubUser } from "./ShowGithubUser";
import { NotFound } from "./NotFound";




export function App() {



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
          <Route path="users" element={<GithubUsers/>}/>
          <Route path="users/:username" element={<ShowGithubUser/>}/>
          <Route path="*" element={<NotFound/>}/>

          
        </Routes>
       
      </div>
  
  );
}
