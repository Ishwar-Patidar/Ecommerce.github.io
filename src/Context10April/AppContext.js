import React, { useState } from "react";

const contextA = React.createContext();

export function AppContext(props){
    const [color, setColor] =useState('Red');
    

return(
        <contextA.Provider value={{color:color, setColor}}>
            {props.children}
        </contextA.Provider>
    )
} 
export default contextA;

