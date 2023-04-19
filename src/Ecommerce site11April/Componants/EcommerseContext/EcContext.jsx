import { createContext, useState } from "react";


const dataContext = createContext();

export default function EcContext(props) {

    const[ data, setData ] = useState("");

    return (
        <dataContext.Provider value = {{data, setData}}>
            {props.children}
        </dataContext.Provider>
    )
}
export { dataContext };