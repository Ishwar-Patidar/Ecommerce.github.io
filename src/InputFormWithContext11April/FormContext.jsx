import { createContext, useState } from "react";

const appContext = createContext();

export function FormContext(props) {
    const [inputData, setInputData] = useState([])

    return (
        <appContext.Provider value={{ inputData, setInputData }}>
            {props.children}
        </appContext.Provider>
    )
}
export default appContext;