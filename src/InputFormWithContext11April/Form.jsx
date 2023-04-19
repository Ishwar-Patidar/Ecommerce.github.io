import { React, useContext, useState } from "react";
import appContext from "./FormContext";

function Form() {
    const { inputData, setInputData } = useContext(appContext);

    const [state, setState] = useState({});
    const [ item, setItem ] = useState([]);
    const myInput = ((e) => {
        const Name = e.target.name;
        const Value = e.target.value;

        setState((preValue) => ({
            ...preValue,
            [Name]: Value
        }))
    })

    function addText(e) {
        e.preventDefault();
        setItem((pre) => (
          [  ...pre, state]
        ))
        
    }
    setInputData(item);

    console.log(state);
    return (
        <>
            <div className="container">
                <div className="row">
                    <form action="" >
                        <input type="text" name="name" value={state.Name} placeholder="Your Name" onChange={myInput} />
                        <button className="btn btn-success" onClick={addText}> + </button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Form;