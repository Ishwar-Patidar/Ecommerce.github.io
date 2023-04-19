


import { createContext } from "react"

const myContext = createContext();

export default function FreeContext(props) {
    let name = "Ishwar";
    return (
        <>
            <myContext.Provider value={name}>
                { props.children }
            </myContext.Provider>
        </>
    )
}
export {myContext};

