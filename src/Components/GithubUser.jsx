
import { useGithubUser } from "./useGithubUser"

export function GithubUser({username}){
    const {data,loading,error, onFetchUser}= useGithubUser(username)

    function handleGetUserData(){
        onFetchUser(username)
    }
    
  
    

    return(
   <div>
    <button onClick={handleGetUserData}>Load user</button>
    {loading && <h1>Loading...</h1>}
    {error && <h1>There is an error</h1>}
{data && (
<div>
<h1> {data.name} </h1>
 <img src={data.avatar_url} alt="User Avatar"/>
 <p>Login:{data.login}</p>
   </div>)}
   </div>

    )

}