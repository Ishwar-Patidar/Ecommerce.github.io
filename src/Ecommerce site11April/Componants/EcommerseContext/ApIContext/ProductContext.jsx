import React, { createContext, useState } from "react";
import dataList from "./ContextArray";

const proContext = createContext();

export function ProductContext(props) {

    const [productList, setProductList] = useState(dataList);
    const [singalProduct, setSingalProduct] = useState({});
    const [data, setData] = useState("");
    const [ cartProduct, setCartProducts ] = useState([]);
    return (
        <proContext.Provider value={{ productList, setProductList, singalProduct, setSingalProduct, data, setData, cartProduct, setCartProducts }}>
            {props.children}
        </proContext.Provider>
    )
};

export default proContext;
