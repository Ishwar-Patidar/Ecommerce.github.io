import React, { createContext, useState } from "react";
import dataList from "./ContextArray";

const proContext = createContext();

export function ProductContext(props) {

  const [productList, setProductList] = useState(dataList);
  const [singalProduct, setSingalProduct] = useState({});
  const [data, setData] = useState("");
  const [cartProduct, setCartProducts] = useState([]);
  const [cartProductMap, setCartproductMap] = useState(new Map());
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState([]);

  let myProduct = {};
  let myValue = {};

  function AddedCart(Product, qty) {
    console.log(qty)
    if (cartProductMap[Product.id]) {
      myProduct = cartProductMap[Product.id];
      myValue = myProduct.quantity += 1
    } else {
      myProduct = Product
      myProduct["quantity"] = qty
      cartItems.push(myProduct)
    }
    cartProductMap[Product.id] = myProduct;
     setCartItems([...cartItems])
  }


  // function RemoveCart(Product, qty) {
  //   console.log(qty)
  //   if (cartProductMap[Product.id]) {
  //     myProduct = cartProductMap[Product.id];
  //     myValue = myProduct.quantity -= 1
  //   } else {
  //     myProduct = Product
  //     myProduct["quantity"] = qty
  //     item.pop(myProduct)
  //     setCartItems(item)
  //   }
  //   cartProductMap[Product.id] = myProduct;
  // }








  return (
    <proContext.Provider value={{ productList, setProductList, singalProduct, setSingalProduct, data, setData, cartProduct, setCartProducts, AddedCart, cartItems, setCartItems, item, setItem}}>
      {props.children}
    </proContext.Provider>
  )
};

export default proContext;
