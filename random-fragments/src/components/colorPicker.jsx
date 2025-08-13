import { useState } from "react"


const ColorPicker = () => {
const [background, setBackground] = useState("green")

  return (
    <div className="color-picker-wrapper" style={{backgroundColor:background}}>
       
        <input type="color" value={background} name="" id=""  onChange={(e)=>{
          setBackground(e.target.value)
        }}/>
    </div>
  )
}

export default ColorPicker