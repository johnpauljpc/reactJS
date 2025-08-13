import { useState } from "react"


const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisiblity = () =>{
        setIsVisible(!isVisible)
    }
  
    return (
    <div id="msg-wrapper" className="msg-wrapper">
        <h3>Message Visibility Toggler</h3>
        <button onClick={toggleVisiblity}>{isVisible ? "Hide Message" : "Show Message" }</button>
        { isVisible ? <p>I love coding!</p> :"" }
    </div>

  )
}

export default ToggleMessage