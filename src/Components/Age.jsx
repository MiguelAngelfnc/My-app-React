export function Age({age, name}){
return(
    <div>
        {((age>18 && age<65) && name ==="Migue") && <p>Hola Johny</p>}
        {(age>18) ? <p> eres mayor de edad.</p> : <p>Eres demasiado joven</p>}
       
        {age>18 && age<65 && <p>Edad indicada</p>}
        
    </div>
)
}