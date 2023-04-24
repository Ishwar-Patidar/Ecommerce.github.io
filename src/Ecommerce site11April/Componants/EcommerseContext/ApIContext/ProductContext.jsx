import React, { createContext, useState } from "react";
import dataList from "./ContextArray";

const proContext = createContext();

export function ProductContext(props) {

    const [ productList, setProductList ] = useState(dataList);
    const [ singalProduct, setSingalProduct ] = useState({});
    const [ data, setData ] = useState("");
    return (
        <proContext.Provider value = {{ productList, setProductList,  singalProduct, setSingalProduct, data, setData }}>
            {props.children}
        </proContext.Provider>
    )
};

export default proContext;
