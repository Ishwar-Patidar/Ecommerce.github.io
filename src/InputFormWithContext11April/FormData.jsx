import { useContext } from "react";
import appContext from "./FormContext";


function FormData (){
    const{inputData, setInputData } = useContext(appContext);
    return(
        <>
        <div className="container">
            <div className="row">
               {inputData.map((e) =>{
                return <div> {e.name}</div>
               })}
            </div>
        </div>
        </>
    )
}
export default FormData;