import { useRef } from "react";


const  Focus = () =>{
const inputRef = useRef(null)
const inputRef2 = useRef(null)
const btnRef = useRef(null)
const handleFocus = () =>{
  if(inputRef.current){
    inputRef.current.focus()
  }
} 

const enableBtn =() =>{
    if(inputRef2.current.value.trim().length > 0){
      console.log("hey")
      // inputRef.current.nextElementSibling.disabled = false
      btnRef.current.disabled = false;
    }
    else{
      btnRef.current.disabled = true
    }
  }
  return(
    <div>
      <div>
        <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
      </div>

      <section>
        {/* Make button enabled when input field is not empty */}
        <input type="text" ref={inputRef2} onChange={enableBtn}/>
      <button disabled ref={btnRef}>Focus</button>
      </section>
    </div>
  )

}


export default Focus;