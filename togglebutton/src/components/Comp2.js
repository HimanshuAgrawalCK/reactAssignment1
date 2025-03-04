import React, {useContext} from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

function Comp2() 
{
    const {toggle,toggleFunction} = useContext(DarkModeContext);
    return (
      <div className={toggle? "comp2-box-dark":"comp2-box-light"} >
      <span>This is component 2</span>    
      <button onClick={toggleFunction}>Change Mode</button>
      
      {/* {toggle ? "Dark" : "Light"} */}
    </div>
  )
}

export default Comp2
