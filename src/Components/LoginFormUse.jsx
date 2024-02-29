import { UseFormInput } from "./UseFormInput";

export function LoginFormUse(){
    const{username,password,handleUsernameChange,handlePasswordChange}=UseFormInput();

    const handleSubmit=(event)=>{
        event.preventDefault();

        console.log("username",username);
        console.log("password",password)
    };

    return (
        
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username"> username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="enter your username"/>
                </div>
                <div>
                <input type="password" id="password" value={password} onChange={handlePasswordChange}  placeholder="enter your password"/>
        
                </div>
                <button type="submit">submit</button>
            </form>
        )}
    


    
        
     
     
      
     
     
   