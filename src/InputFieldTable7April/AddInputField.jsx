import React, { useContext, useState } from "react";
import  AppContext  from "../Context/AppContext";

export default function AddInputField(){

    const {color} = useContext (AppContext);

     console.log(color)


    const [item, setItem] = useState({
        Name: ""
    });
    const [arr, setArr] = useState([]);

    const inputHandler = ((event) => {
        const Name = event.target.name;
        const value = event.target.value;
        setItem((preValue) => ({ ...preValue, [Name]: value }))
      
    })

    const addField = ((e) => {
        setArr((oldObj) => [...oldObj,item ])
    })
    console.log(arr);
    return (
        
        <>
            <div className="container">
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <th> S no </th>
                            <th> Name </th>
                            <th></th>
                            <th></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td><input type="text" name="Name" value={item.Name} onChange={inputHandler} /></td>
                                <td><button className="btn btn-success" onClick={addField}> + </button></td>
                                <td><button className="btn btn-danger"> - </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}
