import React, {createContext,useState} from "react";

const DarkModeContext = createContext(false);

const DarkModeProvider = ({children}) =>{
    const [toggle,setToggle] = useState(false);
    const toggleFunction = () =>{
        setToggle(!toggle);
    }

    return (
        
        <DarkModeContext.Provider value={{toggle,toggleFunction}}>
            {children}
        </DarkModeContext.Provider>
        
    )
}

export {DarkModeContext, DarkModeProvider}