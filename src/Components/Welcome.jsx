

export function Welcome({name , age}){
return(
    <div className="Welcome">
    <p>Welcome, <strong>{name}</strong></p>
   {(age>18) ? <p>Eres mayor de edad</p> : <p>eres demasiado joven</p> }
   {Boolean(age) && <p>this is your age {age}</p>}
   {(age>18 && age<65) && <p>Edad correcta</p> }
   {((age>18 && age<65) && name ==="Migue") && <p>Hola Johny</p>}
    
    </div>
)
}