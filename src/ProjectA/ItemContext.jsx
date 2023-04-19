import React, { useState } from "react";

const contextData = React.createContext();


export function ItemContext(props){
    const [addItem, setAddItem] = useState([]);
    const [cartProductMap, setCartproductMap] = useState(new Map());
    const [cartItems, setCartItems] = useState([]);

function addProduct(product){

    let addedProduct = {};

    if (cartProductMap[product.id]) {
        addedProduct = cartProductMap[product.id]
        addedProduct.quantity += 1
    } else {
        addedProduct = product
        addedProduct["quantity"] = 1
        cartItems.push(addedProduct)
        cartProductMap[product.id] = addedProduct;
    }
        
    }



return(
        <contextData.Provider value={{addItem, setAddItem,addProduct,cartItems}}>
            {props.children}
        </contextData.Provider>
    )
} 
export default contextData;