export function AlertClock(){
    function HandleButtonClick(){
        const now= new Date() 
        alert(`the current time is ${now.toLocaleTimeString()}`)
    }
    return (
        <div>
            <p>click on the button below</p>
            <button onClick={HandleButtonClick}>Click me!</button>
        </div>
    )
}