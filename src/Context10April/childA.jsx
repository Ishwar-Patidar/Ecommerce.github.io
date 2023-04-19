import { useContext } from "react"
import contextA from "./AppContext"

export default function ChildA() {
    const { color } = useContext(contextA);
    return (
        <>
            <div>
                {color}
            </div>
        </>
    )
}