import { useContext } from "react"
import AppContext from "./AppContext"

export default function Child() {

    const { color, setColor } = useContext(AppContext);
    console.log(color);

    function changeHandler() {
        setColor("blue");
    }
    return (
        <>
            <button onClick={changeHandler}>Change color</button>
        </>
    )
}