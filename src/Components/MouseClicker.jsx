export function MouseClicker(){
    function HandleButtonClick(event){
       console.log(event.target.name)
    }
    function HandleImgClick(event){
       console.log(event.target.src)
    }
   
       return(
           <button name="one" onClick={HandleButtonClick}>Press Here!
           <img onClick={HandleImgClick} width={40} height={40} src="pepe" alt="" />
           </button>
       )
    }